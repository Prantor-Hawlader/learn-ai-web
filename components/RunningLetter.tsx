import Typewriter from "./ui/typewriter";

export default function RunningLetter() {
  return (
    <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden p-16 pt-48">
      <p className="whitespace-pre-wrap">
        <span>{"We're born 🌞 to "}</span>
        <Typewriter
          className="text-yellow-500"
          cursorChar={"_"}
          deleteSpeed={40}
          speed={70}
          text={[
            "experience",
            "dance",
            "love",
            "be alive",
            "create things that make the world a better place",
          ]}
          waitTime={1500}
        />
      </p>
    </div>
  );
}
