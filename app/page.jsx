"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import "./App.css";
import { TypographyDemo } from "@/components/Typography";

function App() {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState("pen");
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
  }, []);

  const drawLine = useCallback((ctx, line) => {
    ctx.beginPath();
    ctx.moveTo(line.points[0].x, line.points[0].y);
    for (let i = 1; i < line.points.length; i++) {
      ctx.lineTo(line.points[i].x, line.points[i].y);
    }
    ctx.stroke();
  }, []);

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach((line) => drawLine(ctx, line));
  }, [lines, drawLine]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const newPoint = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };

    if (tool === "pen") {
      const newLine = { points: [newPoint], id: Date.now().toString() };

      setCurrentLine(newLine);
      setLines((prevLines) => [...prevLines, newLine]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const newPoint = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };

    if (tool === "pen" && currentLine) {
      setCurrentLine((prevLine) => {
        if (!prevLine) return null;
        const updatedLine = {
          ...prevLine,
          points: [...prevLine.points, newPoint],
        };

        setLines((prevLines) =>
          prevLines.map((line) =>
            line.id === updatedLine.id ? updatedLine : line
          )
        );

        return updatedLine;
      });
    } else if (tool === "eraser") {
      setLines((prevLines) =>
        prevLines.filter((line) => !isPointNearLine(newPoint, line, 10))
      );
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setCurrentLine(null);
  };

  const isPointNearLine = (point, line, threshold) => {
    for (let i = 1; i < line.points.length; i++) {
      const start = line.points[i - 1];
      const end = line.points[i];
      const distance = distanceToLineSegment(point, start, end);

      if (distance < threshold) {
        return true;
      }
    }

    return false;
  };

  const distanceToLineSegment = (point, start, end) => {
    const A = point.x - start.x;
    const B = point.y - start.y;
    const C = end.x - start.x;
    const D = end.y - start.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;

    if (lenSq !== 0) {
      param = dot / lenSq;
    }

    let xx, yy;

    if (param < 0) {
      xx = start.x;
      yy = start.y;
    } else if (param > 1) {
      xx = end.x;
      yy = end.y;
    } else {
      xx = start.x + param * C;
      yy = start.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;

    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <TypographyDemo />
      <Checkbox />

      <div className="mb-4 flex space-x-4">
        <button
          className={` ${
            tool === "pen" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTool("pen")}
        >
          🖊️ Pen
        </button>
        <button
          className={`${
            tool === "eraser" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTool("eraser")}
        >
          🧹 Eraser
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="border border-gray-300"
        height={600}
        width={800}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}

export default App;

// export default function Home() {
//   return (
//     <div className="grid grid-cols-2 items-center place-items-center">
//       <p className="text-6xl font-mono italic text-center">
//         Web Application building in progress...
//       </p>

//       {/* <Stepper /> */}
//       {/* <LearningCard /> */}

//       {/* <div className="w-full ml-8">
//           <BoxReveal boxColor={"#5046e6"} duration={0.5} width="100%">
//             <GradualSpacing
//               className="mt-3 w-full font-display text-center text-4xl font-bold tracking-[-0.1em] bg-gradient-to-r from-[#2f87bb] to-[#005277] bg-clip-text text-transparent"
//               text="AI is the future and the future is now"
//             />
//           </BoxReveal>
//           <BoxReveal>
//             <p className="mt-3 text-xl text-default-400 font-semibold">
//               Build a foundation of machine learning and AI skills, and
//               understand how to apply them in real world.
//             </p>
//           </BoxReveal>
//         </div> */}
//       {/* <AnimatedBeamMultipleOutputDemo /> */}
//     </div>
//   );
// }
