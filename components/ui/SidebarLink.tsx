"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandPython } from "@tabler/icons-react";

import { Links, useSidebar } from "./Sidebar";

import { cn } from "@/lib/utils";
const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();

  return (
    <Link
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      href={link.href}
      {...props}
    >
      {
        <IconBrandPython className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      }

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-lg group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 text-wrap"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

export default SidebarLink;
