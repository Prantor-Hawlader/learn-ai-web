"use client";
import React, { useState } from "react";

import Sidebar from "../../components/ui/Sidebar";
import { Logo } from "../icons";

import SidebarBody from "./SidebarBody";
import SidebarLink from "./SidebarLink";

export default function SidebarDemo() {
  const links = [
    {
      label: "পাইথন সিনটেক্স",
      href: "#",
    },
    {
      label: "ভেরিয়েবল",
      href: "#",
    },
    {
      label: "ডাটা টাইপ",
      href: "#",
    },
    {
      label: "বুলিয়ান",
      href: "#",
    },
    {
      label: "লিস্ট",
      href: "#",
    },
    {
      label: "টাপল",
      href: "#",
    },
    {
      label: "ফর লুপ",
      href: "#",
    },
    {
      label: "হোয়াইল লুপ",
      href: "#",
    },
    {
      label: "ডু হোয়াইল লুপ",
      href: "#",
    },
    {
      label: "ফাংশন",
      href: "#",
    },
    {
      label: "এরে",
      href: "#",
    },
    {
      label: "অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং",
      href: "#",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <Sidebar animate={false} open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-3 overflow-x-hidden">
          <div className="mt-6 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
