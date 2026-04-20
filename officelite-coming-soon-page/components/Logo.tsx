import logo from "../public/assets/shared/logo.svg";

export default function Logo({type}: {type?: 'home' | 'signup'}) {
  return (
    <>
      {type !== 'signup' ?
        <img src={logo} alt="OfficeLite Logo"
        className="mt-[clamp(40px,_10.1781vw_+_1.8321px,_80px)] mb-[clamp(40px,_10.1781vw_+_1.8321px,_80px)]
        md:mb-[112px] md:self-start
        lg:mb-[140px]" />
        :
        <img src={logo} alt="OfficeLite Logo"
        className="mt-8 mb-20 w-[154.62px] md:mt-16 md:self-start
        lg:absolute lg:top-0 lg:mt-20 lg:mb-[140px]" />
      }
        
    </>
  );
}