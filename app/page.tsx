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
        <h2 className={subtitle({ class: "mt-4" })}>
          Build a foundation of machine learning and AI skills, and understand
          how to apply them in the real world.
        </h2>
      </div>
    </section>
  );
}
