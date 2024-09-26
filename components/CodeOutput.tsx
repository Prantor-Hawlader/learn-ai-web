"use client";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/react";
import { useState } from "react";

import { executeCode } from "@/lib/editorApi";

const CodeOutput = ({ editorRef }: any) => {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) return;

    try {
      const { run: result } = await executeCode(sourceCode);

      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="mb-2 flex justify-start"
        color="success"
        size="sm"
        onClick={runCode}
      >
        Run code
      </Button>

      <Card className="h-20">
        {" "}
        {output
          ? output.map((line: any, i: any) => (
              <p
                key={i}
                className="text-left font-bold text-default-400 ml-3 mt-3"
              >
                {line}
              </p>
            ))
          : 'Click "Run Code" to see the output here'}
      </Card>
    </div>
  );
};

export default CodeOutput;
