import React from "react";

import Code from "./Code";
import GridPattern from "./AnimatedGridPattern";

import { cn } from "@/lib/utils";

const CodeBlock = () => {
  const myCode = `def assign_grade(score):
 if score >= 90: return "A"
 elif score >= 80: return "B"
 else: return "F"`;

  return (
    <div className="flex h-[140px] w-1/2 items-start justify-center overflow-hidden rounded-lg border bg-background p-2 md:shadow-xl">
      <Code animated={true} code={myCode} show={true} />

      <GridPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
        repeatDelay={1}
      />
    </div>
  );
};

export default CodeBlock;
