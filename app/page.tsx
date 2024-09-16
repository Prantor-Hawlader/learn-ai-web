import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import BoxReveal from "@/components/magicui/box-reveal";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 items-center place-items-center">
        <div className="w-full ml-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5} width="100%">
            <GradualSpacing
              className="mt-3 w-full font-display text-center text-4xl font-bold tracking-[-0.1em] bg-gradient-to-r from-[#2f87bb] to-[#005277] bg-clip-text text-transparent"
              text="AI is the future and the future is now"
            />
          </BoxReveal>
          <BoxReveal>
            <p className="mt-3 text-xl text-default-400 font-semibold">
              Build a foundation of machine learning and AI skills, and
              understand how to apply them in real world.
            </p>
          </BoxReveal>
        </div>
        <AnimatedBeamMultipleOutputDemo />
      </div>
    </>
  );
}
