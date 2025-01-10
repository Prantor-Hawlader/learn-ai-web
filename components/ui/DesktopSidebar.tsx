"use client";
import React from "react";
import { motion } from "framer-motion";

import { useSidebar } from "./sidebar";

import { cn } from "@/lib/utils";
const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();

  return (
    <>
      <motion.div
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
          className
        )}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DesktopSidebar;
