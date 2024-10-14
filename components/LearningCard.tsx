"use client";
import { Highlight, themes } from "prism-react-renderer";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import React from "react";
import { IconPinInvoke } from "@tabler/icons-react";

import CodeBlock from "./CodeBlock";
import CodeEditor from "./CodeEditor";

const AnimatedText = ({ content }: any) => {
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
        duration: 5,
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
      {typeof content === "string" ? (
        <div className="flex gap-2 text-lg font-medium  text-start items-start text-wrap">
          <IconPinInvoke className="text-neutral-700 dark:text-neutral-200 h-5 w-8 flex-shrink-0" />{" "}
          <Highlight code={content} language="python" theme={themes.dracula}>
            {({ className, style, tokens, getTokenProps }) => (
              <pre
                className={className + "transition-all duration-700 text-wrap"}
                style={{
                  ...style,
                  background: "transparent",
                  marginBottom: 2,
                  opacity: 1,
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
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center">
          {content}
        </div>
      )}
    </motion.div>
  );
};

export default function Component() {
  const [clicks, setClicks] = useState<number>(0);
  const latestTextRef = useRef<HTMLDivElement>(null);
  const latestCardRef = useRef<HTMLDivElement>(null);

  const texts = [
    "Python এর সিনট্যাক্স খুবই সরল এবং সহজবোধ্য, যা প্রোগ্রামারদের কোড লেখা ও পড়া সহজ করে তোলে। Python এ ইন্ডেন্টেশন ব্যবহার করে ব্লক গঠন করা হয়, এবং সেমিকোলন বা কার্লি ব্রেসের প্রয়োজন হয় না।",
    "Python-এ ফাংশনকে সংজ্ঞায়িত করা হয় def কীওয়ার্ড দিয়ে এবং ফাংশনটি একটি নাম প্রদান করা হয়। এরপর ফাংশনের ভেতরে সেই নির্দিষ্ট কাজের জন্য কোড লেখা হয়। এবং লুপ ও শর্তাবলী লেখার জন্য সহজ ও পরিষ্কার সিনট্যাক্স প্রদান করে। def assign_grade(score)",
    "Python এ ভেরিয়েবল ডিক্লারেশন করার জন্য আলাদা কোনো কিওয়ার্ডের প্রয়োজন হয় না, এবং এটি স্বয়ংক্রিয়ভাবে ডেটা টাইপ নির্ধারণ করে। এছাড়াও, Python এ ফাংশন ডিফাইন করতে def কিওয়ার্ড ব্যবহার করা হয় এবং লুপ ও শর্তাবলী লেখার জন্য সহজ ও পরিষ্কার সিনট্যাক্স প্রদান করে।",
    "Python এ শর্তমূলক স্টেটমেন্টগুলোতে if, elif, এবং else ব্যবহার করা হয়, যা প্রোগ্রামের লজিক সহজ করে তোলে। লুপের জন্য for এবং while লুপ ব্যবহৃত হয়। Python এ ফাংশন বা মেথডে আর্গুমেন্ট পাস করার সময় ডিফল্ট ভ্যালু দেওয়া যায়, যা কোডিংয়ে আরও বেশি ফ্লেক্সিবিলিটি প্রদান করে।",
    "Python এ লিস্ট, টাপল, সেট, এবং ডিকশনারির মতো ডেটা স্ট্রাকচার সহজভাবে ব্যবহার করা যায়, যা প্রোগ্রামিংয়ে শক্তিশালী ডেটা ম্যানিপুলেশন সক্ষম করে। Python এর সিনট্যাক্স মডিউল ইমপোর্ট ও ব্যবহার করার ক্ষেত্রেও খুব সহজ, যা প্রোগ্রামারদের কোড পুনঃব্যবহারযোগ্য এবং মডুলার করে তোলে।",
    "Python এর সিনট্যাক্সে ফাইল হ্যান্ডলিংও খুব সহজ। with open() স্টেটমেন্ট ব্যবহার করে ফাইল ওপেন এবং ক্লোজ করা যায়, যা মেমোরি লিকের ঝুঁকি কমায়। এছাড়াও, Python এর লিস্ট কম্প্রিহেনশন একটি সংক্ষিপ্ত ও কার্যকর উপায়ে লিস্ট তৈরি করার সুবিধা দেয়, যা কোডিংকে আরও সংক্ষিপ্ত ও দ্রুত করে তোলে।",

    <CodeBlock key={11} />,
    <CodeEditor key={12} />,
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
      <div className="relative min-h-screen mt-11 mx-5">
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

      <div className="w-full sticky bottom-0 bg-gradient-to-r from-[#00b7fa] to-[#01cfea] p-4 text-white flex justify-end items-center">
        <Button color="warning" onClick={handleClick}>
          ক্লিক করুন!
        </Button>
      </div>
    </>
  );
}
