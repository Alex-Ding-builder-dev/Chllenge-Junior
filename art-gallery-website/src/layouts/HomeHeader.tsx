import heroDesktop from "../../public/desktop/image-hero@2x.jpg";
import heroTablet from "../../public/tablet/image-hero@2x.jpg";
import heroMobile from "../../public/mobile/image-hero@2x.jpg";
import Button from "../components/Button";
export default function HomeHeader() {
  return (
    <header className="md:h-[clamp(43.75rem,_calc(14.881vw_+_36.6071rem),_50rem)]
    lg:bg-header">
      <div className="md:relative h-full max-w-[90rem] mx-auto
      lg:grid lg:grid-cols-[28.1875rem_33.7738rem]">
          <div aria-hidden="true" className="bg-grey-900"></div>
          <picture>
            <source media="(min-width: 1440px)" srcSet={heroDesktop} />
            <source media="(min-width: 768px)" srcSet={heroTablet} />
            <img className="h-full" src={heroMobile} alt="Hero Image" />
          </picture>
          <div className="px-[1rem] pt-[2rem] space-y-[clamp(2rem,_calc(4.0712vw_+_1.0458rem),_3rem)]
          md:p-0
          md:absolute md:top-1/2 md:right-[clamp(2.5rem,_calc(18.6012vw_-_6.4286rem),_10.3125rem)]
          md:w-[clamp(21.1875rem,_calc(1.6369vw_+_20.4018rem),_21.875rem)]
          md:-translate-y-1/2">
            <h1 className="text-h1 uppercase
            lg:absolute lg:top-[-4.125rem] lg:left-[-47.5rem] lg:w-[28.1875rem] ">Modern Art Gallery</h1>
            <p className="text-header-p">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
            <Button position='home' />
          </div>
      </div>
    </header>
  );
}