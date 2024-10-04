"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stepper() {
  const [active, setActive] = useState(false);

  const line = useAnimation();
  const secondCircle = useAnimation();

  useEffect(() => {
    if (active) {
      const sequence = async () => {
        await line.start("start");
        await secondCircle.start("start");
      };

      sequence();
    }
  }, [active]);
  const steps = [
    {
      label: "Variables",
      description: "The basics of declaring and assigning values to variables",
      progress: "11/11",
    },
    {
      label: "Booleans",
      description:
        "Learn how to code with binary data using JavaScript Booleans",
      progress: "5/5",
    },
  ];

  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <Circle alreadyFinish={true} />
        <Line controls={line} />
        <Circle controls={secondCircle} />
      </div>
      <button onClick={() => setActive(true)}>start animation</button>

      <div className="flex flex-col space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                <span>{step.progress}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-16 bg-gray-300" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{step.label}</h2>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Line = ({ controls }: any) => {
  const style = {
    background: "#ccc",
    width: "3px",
    height: "80px",
  };

  const variants = {
    start: {
      width: "3px",
      height: "80px",
      backgroundColor: "#01cfea",
      transition: { duration: 1.5 },
    },
    initial: { width: 0 },
  };

  return (
    <div style={style}>
      <motion.div
        animate={controls}
        initial={"initial"}
        style={{ height: "3px" }}
        variants={variants}
      />
    </div>
  );
};

const Circle = ({ controls, alreadyFinish }: any) => {
  const style = {
    borderRadius: "60%",
    width: "100px",
    height: "80px",
    border: "1px solid",
  };

  const variants = {
    start: {
      borderColor: "#20F038",
      transition: { duration: alreadyFinish ? 0 : 2 },
    },
    initial: alreadyFinish ? false : { borderColor: "#E6E6FA" },
  };

  return (
    <motion.div
      animate={alreadyFinish ? "start" : controls}
      initial={"initial"}
      style={style}
      variants={variants}
      className="flex items-center justify-center"
    >
      Variable
    </motion.div>
  );
};
