"use client";

import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

type CodeProps = {
  code: string;
  animated: boolean;
  show: boolean;
};

const Code = ({ code, animated, show }: CodeProps) => {
  const [text, setText] = useState(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;

      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 100);

        return () => clearInterval(intervalId);
      }, 150);
    }
  }, [code, show]);

  return (
    <div>
      <Highlight code={text} language="python" theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className + "transition-all duration-700 no-scrollbar"}
            style={{
              ...style,
              background: "transparent",
              paddingTop: 0,
              paddingBottom: 0,
              maxHeight: show ? 24 : 0,
              opacity: show ? 1 : 0,
              height: "auto",
              width: "fit-content",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
