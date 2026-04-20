
import chart from "../public/assets/home/illustration-charts.svg";
import headerPattern from "../public/assets/home/bg-pattern-header.svg";
import Text from "../components/Text";
import Logo from "../components/Logo";

export default function Header() {
  return (
    <header className="bg-neutral-50 relative overflow-hidden
    md:px-10 md:grid md:place-items-center
    ">
      <img src={headerPattern} alt="Header Pattern" aria-hidden="true" className="absolute top-[-174px] left-1/2 translate-x-[-50%] w-[460px] max-w-none
      md:w-[660px] md:-top-[158px] md:right-[-274px] md:translate-x-0
      lg:w-[1134px] lg:-top-[420px] lg:right-[-359px]" />
      <div className="flex flex-col items-center md:items-start md:w-[688px]
      lg:w-[1110px] relative z-1">
        <Logo />
        <div className="flex flex-col items-center mb-20
        md:flex-row-reverse md:gap-14 md:mb-[112px]
        lg:gap-24 lg:mb-[140px]">
            <img src={chart} alt="OfficeLite Chart"
            className="mb-6 w-[220px]
            md:w-[280px] md:mb-0
            lg:w-[475px]" />
            <Text type="home" />
        </div>
      </div>
    </header>
  );
}