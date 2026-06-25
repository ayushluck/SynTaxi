/**
 * Executes JavaScript code safely inside a Web Worker.
 * @param {string} language - programming language (only "javascript" or "js" supported)
 * @param {string} code - source code to be executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  const normalizedLang = language.toLowerCase();

  if (normalizedLang !== "javascript" && normalizedLang !== "js") {
    return {
      success: false,
      error: `Unsupported language: ${language}. This client only supports local JavaScript execution.`,
    };
  }

  return executeJavaScriptLocally(code);
}

function executeJavaScriptLocally(code) {
  return new Promise((resolve) => {
    const workerCode = `
      const formatValue = (value) => {
        if (typeof value === "undefined") return "undefined";
        if (typeof value === "string") return value;

        try {
          return JSON.stringify(value);
        } catch {
          return String(value);
        }
      };

      const logs = [];
      console.log = (...args) => {
        logs.push(args.map(formatValue).join(" "));
      };

      try {
        // Appending 'return' allows capturing the final output value if needed
        new Function(${JSON.stringify(code)})();
        postMessage({ success: true, output: logs.join("\\n") || "No output" });
      } catch (error) {
        postMessage({ success: false, error: error.message || String(error) });
      }
    `;

    const blob = new Blob([workerCode], { type: "text/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));

    // 3-second timeout protection to stop infinite loops from freezing the browser
    const timeoutId = setTimeout(() => {
      worker.terminate();
      resolve({
        success: false,
        error: "Execution timed out. Check for an infinite loop.",
      });
    }, 3000);

    worker.onmessage = (event) => {
      clearTimeout(timeoutId);
      worker.terminate();
      resolve(event.data);
    };

    worker.onerror = (errorEvent) => {
      clearTimeout(timeoutId);
      worker.terminate();
      resolve({
        success: false,
        error: errorEvent.message || "JavaScript execution failed.",
      });
    };
  });
}