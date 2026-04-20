import StartButton from "../components/StartButton";
import ComingTime from "../components/ComingTime";
import footerPattern from "../public/assets/home/bg-pattern-footer.svg";

export default function Footer() {
  return (
    <footer className="-mt-[801.58px] bg-neutral-900 pt-[881.58px] pb-[112.42px] px-4 relative
    md:-mt-[487px] md:pt-[584px] grid place-items-center
    lg:-mt-[235px] lg:pt-[315px] lg:pb-[121px]">
      <img src={footerPattern} alt="Footer Pattern" aria-hidden="true" className="absolute bottom-[-96px] left-1/2 translate-x-[-50%] w-[1200px] max-w-none
      md:bottom-[-483px] md:w-[1454px]
      lg:w-[2036px] lg:bottom-[-819px] lg:left-[-702px] lg:translate-x-0" />
      <div className="grid place-items-center lg:w-[1110px] lg:flex lg:justify-between">
        <ComingTime />
        <StartButton />
      </div>
    </footer>
  );
}