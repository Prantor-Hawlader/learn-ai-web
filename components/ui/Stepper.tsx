"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stepper() {
  const [active, setActive] = useState(false);

  const line = useAnimation();
  const secondCircle = useAnimation();

  const Line = ({ controls }: any) => {
    const style = {
      background: "#ccc",
      width: "5px",
      height: "80px",
    };

    const variants = {
      start: {
        width: "5px",
        height: "80px",
        backgroundColor: "#01cfea",
        transition: { duration: 1.5 },
      },
      initial: { width: "5px" },
    };

    return (
      <div style={style}>
        <motion.div
          animate={controls}
          initial={"initial"}
          style={{ height: "5px" }}
          variants={variants}
        />
      </div>
    );
  };

  const Circle = ({ controls, alreadyFinish }: any) => {
    const style = {
      borderRadius: "60%",
      width: "100px",
      height: "90px",
      border: "3px solid",
    };

    const variants = {
      start: {
        borderColor: "#20F038",
        transition: { duration: alreadyFinish ? 0 : 1 },
      },
      initial: alreadyFinish ? false : { borderColor: "#E6E6FA" },
    };

    return (
      <div className="flex items-center cursor-pointer">
        <motion.div
          animate={alreadyFinish ? "start" : controls}
          className="flex items-center justify-center gap-3"
          initial={"initial"}
          style={style}
          variants={variants}
          onClick={() => setActive(true)}
        >
          Variable
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    if (active) {
      const sequence = async () => {
        await line.start("start");
        await secondCircle.start("start");
      };

      sequence();
    }
  }, [active]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <Circle alreadyFinish={true} />
        <Line controls={line} />
        <Circle controls={secondCircle} />
      </div>
    </div>
  );
}
