"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import React from "react";

import CodeBlock from "./CodeBlock";

const AnimatedText = ({ content, index }: any) => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
      transformOrigin: "bottom",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 10,
      },
    },
  };

  return (
    <motion.div
      animate="visible"
      className="mb-10 relative perspective-1000"
      initial="hidden"
      variants={textVariants}
    >
      <motion.p className="text-lg font-medium text-white text-start">
        {content}
      </motion.p>
    </motion.div>
  );
};

// const AnimatedCard = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       animate="visible"
//       className="mt-8"
//       initial="hidden"
//       variants={cardVariants}
//     >
//       <CodeBlock />
//     </motion.div>
//   );
// };

export default function Component() {
  const [clicks, setClicks] = useState<number>(0);
  const latestTextRef = useRef<HTMLDivElement>(null);
  const latestCardRef = useRef<HTMLDivElement>(null);

  const texts = [
    "১ম: স্বাগতম! শুরু করুন।",
    "২য়: চমৎকার! এগিয়ে যান।",
    "৩য়: দারুণ! ভালো যাচ্ছে।",
    "৪র্থ: অসাধারণ! অগ্রগতি লক্ষণীয়।",
    "৫ম: বিস্ময়কর! অনেকটা এগিয়েছেন।",
    "৬ষ্ঠ: অভিনন্দন! অর্ধেক পথ শেষ।",
    "৭ম: সাবাশ! দৃঢ়তা বজায় রাখুন।",
    "৮ম: চমৎকার! শেষের দিকে।",
    "৯ম: প্রায় শেষ! আর একটু।",
    "১০ম: অভিনন্দন! সফলভাবে শেষ।",
    <CodeBlock key={11} />,
  ];

  const handleClick = () => {
    setClicks((prevClicks) => Math.min(prevClicks + 1, texts.length + 1));
  };

  useEffect(() => {
    if (latestTextRef.current && clicks > 0 && clicks <= texts.length) {
      setTimeout(() => {
        latestTextRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [clicks]);
  useEffect(() => {
    if (latestCardRef.current && clicks > texts.length) {
      setTimeout(() => {
        latestCardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [clicks]);

  return (
    <>
      <div className="relative min-h-screen">
        <div>
          <AnimatePresence>
            {texts.slice(0, clicks).map((content, index) => (
              <div
                key={index}
                ref={index === clicks - 1 ? latestTextRef : null}
              >
                <AnimatedText content={content} index={index} />
              </div>
            ))}
          </AnimatePresence>
          {/* {clicks > texts.length && (
            <div
              ref={latestCardRef}
              className="flex justify-start items-center"
            >
              <AnimatedCard />
            </div>
          )} */}
        </div>
      </div>

      <div className="sticky bottom-0 bg-gray-800 p-4 text-white flex justify-end items-center">
        <Button onClick={handleClick}>ক্লিক করুন!</Button>
      </div>
    </>
  );
}
