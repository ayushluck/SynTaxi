import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage, // assumed to be "javascript"
  code,
  isRunning,
  onCodeChange,
  onRunCode,
}) {
  const currentLang = LANGUAGE_CONFIG[selectedLanguage] || { name: "JavaScript", monacoLang: "javascript" };

  return (
    <div className="h-full min-h-0 bg-base-300 flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          {currentLang.icon && (
            <img
              src={currentLang.icon}
              alt={currentLang.name}
              className="size-6"
            />
          )}
          {/* Replaced dropdown with a static clean badge */}
          <span className="text-sm font-semibold px-2 py-1 bg-base-200 rounded">
            {currentLang.name}
          </span>
        </div>

        <button className="btn btn-primary btn-sm gap-2" disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <Editor
          height={"100%"}
          language={currentLang.monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 16,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "visible",
              horizontal: "visible",
            },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;