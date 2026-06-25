import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const splitTopLevel = (value) => {
    const parts = [];
    let current = "";
    let depth = 0;
    let quote = null;

    for (const char of value) {
      if ((char === '"' || char === "'") && !quote) quote = char;
      else if (char === quote) quote = null;
      else if (!quote && char === "[") depth += 1;
      else if (!quote && char === "]") depth -= 1;

      if (!quote && depth === 0 && char === ",") {
        parts.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }

    if (current.trim()) parts.push(current.trim());
    return parts;
  };

  const normalizeLineValue = (value) => {
    const line = value.trim();

    if (line.startsWith("[") && line.endsWith("]")) {
      const inner = line.slice(1, -1).trim();
      if (!inner) return "[]";

      return `[${splitTopLevel(inner).map(normalizeLineValue).join(",")}]`;
    }

    const unquoted = line.replace(/^["']|["']$/g, "");
    const lower = unquoted.toLowerCase();

    if (["true", "false", "null", "none"].includes(lower)) {
      return lower === "none" ? "null" : lower;
    }

    if (!Number.isNaN(Number(unquoted)) && unquoted !== "") {
      return String(Number(unquoted));
    }

    return unquoted;
  };

  const normalizeOutput = (output) =>
    output
      .trim()
      .split("\n")
      .map(normalizeLineValue)
      .filter((line) => line.length > 0)
      .join("\n");

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const expectedOutputs = Array.isArray(expectedOutput) ? expectedOutput : [expectedOutput];

    return expectedOutputs.some((expected) => normalizedActual === normalizeOutput(expected));
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);

    // check if code executed successfully and matches expected output

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1 min-h-0">
        <PanelGroup direction="horizontal" className="h-full">
          {/* left panel- problem desc */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* right panel- code editor & output */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical" className="h-full">
              {/* Top panel - Code editor */}
              <Panel defaultSize={70} minSize={30}>
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              {/* Bottom panel - Output Panel*/}

              <Panel defaultSize={30} minSize={30}>
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
