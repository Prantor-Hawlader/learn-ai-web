"use client";

import { PulseBeams } from "@/components/SpecialBeam";

export default function Home() {
  return (
    <div className="grid grid-cols-2 items-center place-items-center">
      <p className="text-6xl font-mono italic text-center">
        Web Application building in progress...
      </p>

      <PulseBeams />
    </div>
  );
}
