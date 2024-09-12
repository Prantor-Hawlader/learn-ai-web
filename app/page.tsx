import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "violet" })}>AI&nbsp;</h1>
        <h1 className={title()}>is the future and </h1>
        <br />
        <h1 className={title()}>the future is</h1>
        <h1 className={title({ color: "cyan" })}> Now</h1>
        <GradualSpacing
          className="font-display mt-3 text-center text-xl font-bold tracking-[-0.1em]  text-black dark:text-white"
          text="Build a foundation of machine learning and AI skills, and understand
          how to apply them in the real world."
        />
      </div>
      <div>
        <PulsatingButton>Join course</PulsatingButton>;
      </div>
      <div className="flex justify-center">
        <AnimatedBeamMultipleOutputDemo />
      </div>
    </section>
  );
}
