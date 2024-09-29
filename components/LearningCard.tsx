"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";

import CodeEditor from "./CodeEditor";

export default function LearningCard() {
  const [clicks, setClicks] = useState<number>(0);
  const latestCardRef = useRef<HTMLDivElement>(null);

  const texts = [
    "1st কার্ড: স্বাগতম! এটি সবসময় দৃশ্যমান থাকবে।",
    "2nd click",
    "3rd click: অসাধারণ! আপনার অগ্রগতি লক্ষণীয়।",
    "4th click: বিস্ময়কর! আপনি অনেকটা এগিয়ে গেছেন।",
    "5th click: সাবাশ! আপনি দৃঢ়তার সাথে এগিয়ে যাচ্ছেন।",
    "6th click: চমৎকার! আপনি প্রায় শেষ পর্যন্ত পৌঁছে গেছেন।",
    "7th click: অসাধারণ! আপনি শেষের দিকে।",
    "8th click: অভিনন্দন! আপনি সফলভাবে শেষ করেছেন।",
    <CodeEditor key={11} />,
  ];

  const handleClick = () => {
    setClicks((prevClicks) => Math.min(prevClicks + 1, texts.length - 1));
  };

  useEffect(() => {
    if (latestCardRef.current && clicks > 0) {
      latestCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [clicks]);

  const renderContent = (content: React.ReactNode, index: number) => {
    if (typeof content === "string") {
      return (
        <Card
          key={index}
          ref={index === clicks ? latestCardRef : null}
          className="overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-500 mb-4"
        >
          <div className="p-0">
            <div className="h-12 flex items-center overflow-x-auto whitespace-nowrap px-4">
              <p className="text-sm">{content}</p>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <div
        key={index}
        ref={index === clicks ? latestCardRef : null}
        className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 mb-4"
      >
        {content}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-4">
        <div className="max-w-md mx-auto space-y-4">
          <Card className="overflow-hidden sticky top-4 z-10 bg-background">
            <div className="p-0">
              <div className="h-12 flex items-center overflow-x-auto whitespace-nowrap px-4">
                <p className="text-sm">{texts[0]}</p>
              </div>
            </div>
          </Card>
          {texts
            .slice(1, clicks + 1)
            .map((content, index) => renderContent(content, index + 1))}
        </div>
      </div>
      <div className="sticky bottom-0 p-4 bg-background border-t">
        <div className="flex justify-center max-w-md mx-auto">
          <Button className="w-48" onClick={handleClick}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
