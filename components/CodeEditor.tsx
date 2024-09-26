"use client";
import { Editor } from "@monaco-editor/react";
import { Card } from "@nextui-org/react";
import { useRef, useState } from "react";

import CodeOutput from "./CodeOutput";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef();
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="w-full">
        <Editor
          defaultLanguage="python"
          defaultValue={`print("Hello World")`}
          height="25vh"
          theme="vs-dark"
          value={value}
          onChange={(value: any) => {
            setValue(value);
          }}
          onMount={onMount}
        />
      </Card>
      <CodeOutput editorRef={editorRef} />
    </div>
  );
};

export default CodeEditor;
