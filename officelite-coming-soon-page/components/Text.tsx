import StartButton from "../components/StartButton";

export default function Text({type}: {type: 'home' | 'signup'}) {
  return (
    <div className="mx-[17px] text-center flex flex-col items-center gap-6
            md:text-left md:mx-0 md:flex-col md:items-start">
              <h1 className="text-preset-1 text-[40px] text-neutral-800
              lg:text-[56px]">A simple solution to complex tasks is coming soon</h1>
              <p className="text-preset-4 text-neutral-500
              lg:text-preset-3">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
              {type === 'home' && <StartButton />}
    </div>
  );
}