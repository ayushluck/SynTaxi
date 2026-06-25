import express from "express";
import { execFile } from "child_process";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import os from "os";
import path from "path";

const router = express.Router();
const EXECUTION_TIMEOUT_MS = 3000;

router.post("/", async (req, res) => {
  const { language, code } = req.body;

  if (!language || typeof code !== "string") {
    return res.status(400).json({ success: false, error: "Language and code are required." });
  }

  try {
    if (language === "python") {
      return res.json(await executePython(code));
    }

    if (language === "java") {
      return res.json(await executeJava(code));
    }

    return res.status(400).json({ success: false, error: `Unsupported language: ${language}` });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Code execution failed.",
    });
  }
});

async function executePython(code) {
  const tempDir = await makeTempDir();
  const filePath = path.join(tempDir, "main.py");

  try {
    await fs.writeFile(filePath, code, "utf8");
    const result = await runFirstAvailableCommand(
      [
        { command: "python", args: [filePath] },
        { command: "py", args: [filePath] },
        { command: "python3", args: [filePath] },
      ],
      "Python is not installed or is not available in PATH."
    );

    return formatRunResult(result);
  } finally {
    await cleanupTempDir(tempDir);
  }
}

async function executeJava(code) {
  const tempDir = await makeTempDir();
  const filePath = path.join(tempDir, "Solution.java");

  try {
    await fs.writeFile(filePath, code, "utf8");

    const compileResult = await runCommand("javac", [filePath]);
    if (compileResult.code !== 0) {
      return {
        success: false,
        output: compileResult.stdout,
        error: compileResult.stderr || "Java compilation failed.",
      };
    }

    const runResult = await runCommand("java", ["-cp", tempDir, "Solution"]);
    return formatRunResult(runResult);
  } finally {
    await cleanupTempDir(tempDir);
  }
}

function runFirstAvailableCommand(commands, missingRuntimeMessage) {
  return commands.reduce(
    (attempt, commandConfig) =>
      attempt.catch((error) => {
        if (error.code !== "ENOENT") throw error;
        return runCommand(commandConfig.command, commandConfig.args);
      }),
    Promise.reject({ code: "ENOENT" })
  ).catch((error) => {
    if (error.code === "ENOENT") {
      return { code: 127, stdout: "", stderr: missingRuntimeMessage };
    }

    throw error;
  });
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    execFile(
      command,
      args,
      {
        timeout: EXECUTION_TIMEOUT_MS,
        windowsHide: true,
        maxBuffer: 1024 * 1024,
      },
      (error, stdout, stderr) => {
        if (error?.code === "ENOENT") {
          reject(error);
          return;
        }

        resolve({
          code: error?.killed ? 124 : error?.code || 0,
          stdout,
          stderr: error?.killed ? "Execution timed out. Check for an infinite loop." : stderr,
        });
      }
    );
  });
}

function formatRunResult(result) {
  if (result.code !== 0 || result.stderr) {
    return {
      success: false,
      output: result.stdout,
      error: result.stderr || "Code execution failed.",
    };
  }

  return {
    success: true,
    output: result.stdout || "No output",
  };
}

function makeTempDir() {
  return fs.mkdtemp(path.join(os.tmpdir(), `syntaxi-${randomUUID()}-`));
}

async function cleanupTempDir(tempDir) {
  await fs.rm(tempDir, { recursive: true, force: true });
}

export default router;
