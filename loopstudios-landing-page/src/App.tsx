import {useState,type Dispatch,type SetStateAction} from "react";

export default function App() {
  const [isMenuOpened , setIsMenuOpened]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
  const handleClick = ():void=>{
    setIsMenuOpened(val=>!val)
  }
  return (
    <>
      {!isMenuOpened &&
      <header className="h-[650px] py-[clamp(40px,_6.1069vw_+_17.0992px,_64px)] px-[clamp(24px,_14.2494vw_-_29.4351px,_80px)] bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-center
      flex justify-center md:bg-[url('/images/desktop/image-hero.jpg')] md:bg-black/40 md:bg-blend-overlay
      lg:py-16 lg:pb-[146px] lg:px-[165px]">
        <div className="max-w-[608px] lg:max-w-[1110px] lg:w-full">
          <div className="flex justify-between items-center mb-[clamp(163px,_-8.3969vw_+_194.4885px,_130px)]
          lg:mb-[127px]">
            <img src="/images/logo.svg" alt="Loopstudios"
            className="w-[clamp(144px,_12.2137vw_+_98.1985px,_192px)]" />
            <button type="button" aria-label="Open menu" className="lg:hidden" onClick={handleClick}>
              <img src="/images/icon-hamburger.svg" alt="Menu"
              className="w-[clamp(24px,_2.0356vw_+_16.3664px,_32px)]" />
            </button>
            <nav className="hidden lg:block">
              <ul className="flex text-white text-preset-6 gap-8">
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">About</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Careers</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Events</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Products</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Support</a></li>
              </ul>
            </nav>
          </div>
          <h1 className="t3-1 text-white uppercase border-2 py-[clamp(18px,_5.598vw_-_2.9924px,_40px)] px-[clamp(24px,_4.0712vw_+_8.7328px,_40px)]
          lg:w-[650px] lg:py-[42px] lg:h-[278px]">Immersive experiences that deliver</h1>
        </div>
      </header>}
      {isMenuOpened &&
      <menu className="bg-black h-[812px] py-[clamp(40px,_6.1069vw_+_17.0992px,_64px)] px-[clamp(25px,_13.9949vw_-_27.4809px,_80px)] pb-[373px] flex
     justify-center">
        <div className="md:w-[607.51px] h-full flex flex-col justify-between w-full">
          <div className="flex justify-between items-center">
            <img src="/images/logo.svg" alt="Loopstudios"
                className="w-[clamp(144px,_12.2137vw_+_98.1985px,_192px)]" />
            <img src="/images/icon-close.svg" alt="close menu" className="hover:cursor-pointer hover:opacity-70 hover:transition-opacity" onClick={handleClick} />
          </div>
          <nav>
            <ul className="flex text-white text-preset-5 uppercase gap-6 flex-col">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Support</a></li>
            </ul>
          </nav>
        </div>
      </menu>}
      <main className="pt-24 pb-[clamp(98px,_-2.799vw_+_108.4962px,_87px)] px-[clamp(24px,_14.2494vw_-_29.4351px,_80px)] flex flex-col items-center
      lg:pt-[160px] lg:pb-[182px] lg:px-[160px]">
        <section className="mb-24 max-w-[608px] lg:max-w-[1111px] lg:flex lg:items-end lg:mb-[184px]">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/desktop/image-interactive.jpg" />
            <img src="/images/mobile/image-interactive.jpg" alt="Interactive Design"
            className="w-[clamp(327px,_71.5013vw_+_58.8702px,_608px)] mb-12
            lg:mb-0 lg:w-[731px]" />
          </picture>
          <div className="text-center mx-[clamp(0px,_-6.1069vw_+_46.9008px,_24px)]
          lg:w-[541px] lg:m-0 lg:pt-[97px] lg:pl-[96px] lg:-ml-[161px] lg:bg-white lg:text-left">
            <h2 className="t4-2 uppercase mb-[clamp(16px,_2.0356vw_+_8.3664px,_24px)]">The leader in interactive VR</h2>
            <p className="text-preset-6 text-black/50">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </div>
        </section>
        <section className="w-full max-w-[608px] flex flex-col items-center
        lg:max-w-[1120px]">
          <div className="lg:flex lg:justify-between lg:w-full lg:mb-20">
            <h2 className="t4-2 uppercase mb-[clamp(32px,_-4.0712vw_+_63.2672px,_48px)] text-center
            lg:text-left lg:m-0">Our Creations</h2>
            <button className="hidden lg:block text-preset-7 uppercase border py-[13px] px-[40.5px] hover:cursor-pointer">See All</button>
          </div>
          <div className="grid gap-6 mb-8 w-full
          lg:grid-cols-4">
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-deep-earth.jpg" />
              <img src="/images/mobile/image-deep-earth.jpg" alt="Deep Earth"
              className="h-[120px] object-cover w-full object-center
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">deep <br /> earth</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-night-arcade.jpg" />
              <img src="/images/mobile/image-night-arcade.jpg" alt="Night Arcade"
              className="h-[120px] object-cover w-full object-center
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">night <br /> arcade</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-soccer-team.jpg" />
              <img src="/images/mobile/image-soccer-team.jpg" alt="Soccer Team"
              className="h-[120px] object-cover w-full object-top
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">soccer <br /> team vr</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-grid.jpg" />
              <img src="/images/mobile/image-grid.jpg" alt="Grid"
              className="h-[120px] object-cover w-full object-center
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">the <br />grid</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-from-above.jpg" />
              <img src="/images/mobile/image-from-above.jpg" alt="From Above"
              className="h-[120px] object-cover w-full object-bottom
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">from up <br /> above vr</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-pocket-borealis.jpg" />
              <img src="/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis"
              className="h-[120px] object-cover w-full object-center
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">pocket  <br /> borealis</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-curiosity.jpg" />
              <img src="/images/mobile/image-curiosity.jpg" alt="Curiosity"
              className="h-[120px] object-cover w-full object-bottom
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">the <br /> curiosity</div>
            </picture>
            <picture className="relative">
              <source media="(min-width: 1440px)" srcSet="/images/desktop/image-fisheye.jpg" />
              <img src="/images/mobile/image-fisheye.jpg" alt="Fisheye"
              className="h-[120px] object-cover w-full object-top
              lg:h-[450px] lg:w-full" />
              <div className="w-full h-full absolute bg-linear-to-r from-black/60 to-black/0 top-0 pb-[20px] text-white flex items-end justify-start pl-[clamp(20px,_4.374vw_+_3.5973px,_37.19px)]
              text-preset-5 uppercase lg:bg-linear-to-t lg:text-preset-4 lg:pb-8 lg:pl-10">make it <br /> fisheye</div>
            </picture>
          </div>
          <button className="text-preset-7 uppercase border py-[13px] px-[40.5px] lg:hidden hover:cursor-pointer">See All</button>
        </section>
      </main>
      <footer className="bg-black p-14 flex justify-center text-white
      md:py-[43.5px] md:px-20
      lg:pt-[45px] lg:pb-8 lg:x-[165px]">
        <div className="max-w-[263px] flex flex-col items-center w-full
        md:max-w-[608px] lg:max-w-[1100px]">
          <div className="mb-4 w-full flex flex-col items-center md:flex-row md:justify-between md:mb-6">
              <img src="/images/logo.svg" alt="Loopstudios"
              className="w-[144px]" />
              <nav className="md:hidden">
                <ul className="flex flex-col items-center my-10 text-preset-6 gap-4
                ">
                  <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">About</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Careers</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Events</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Products</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Support</a></li>
                </ul>
              </nav>
            <div className="flex gap-4">
              <a href="https://facebook.com" aria-label="Facebook"><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
              <a href="https://twitter.com" aria-label="Twitter"><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
              <a href="https://pinterest.com" aria-label="Pinterest"><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a>
              <a href="https://instagram.com" aria-label="Instagram"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-full text-preset-6 ">
            <nav className="hidden md:block">
              <ul className="flex gap-4">
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">About</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Careers</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Events</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Products</a></li>
                <li className="group hover:-mb-2"><a className="group-hover:border-b-2 group-hover:pb-2" href="#">Support</a></li>
              </ul>
            </nav>
            <p className="opacity-50 text-nowrap">&copy; 2025 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}