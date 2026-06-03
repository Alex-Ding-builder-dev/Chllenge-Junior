import yourdayImageDesktop from "../../public/desktop/image-grid-1@2x.jpg";
import yourdayImageTablet from "../../public/tablet/image-grid-1@2x.jpg";
import yourdayImageMobile from "../../public/mobile/image-grid-1@2x.jpg";
import deskroomImageDesktop from "../../public/desktop/image-grid-2@2x.jpg";
import deskroomImageTablet from "../../public/tablet/image-grid-2@2x.jpg";
import deskroomImageMobile from "../../public/mobile/image-grid-2@2x.jpg";
import inspirationImageDesktop from "../../public/desktop/image-grid-3@2x.jpg";
import inspirationImageTablet from "../../public/tablet/image-grid-3@2x.jpg";
import inspirationImageMobile from "../../public/mobile/image-grid-3@2x.jpg";
export default function HomeMain() {
  return (
    <main className="home-main-box">
      <div className="center grid grid-cols-1 gap-8
      md:gap-[clamp(0.75rem,_calc(2.9762vw_-_0.6786rem),_2rem)]">
        <section className="flex flex-col gap-6
        md:flex-row-reverse md:gap-[clamp(4.25rem,_calc(8.4821vw_+_0.1786rem),_7.8125rem)] md:items-center">
            <picture className="shrink-0">
                <source srcSet={yourdayImageDesktop} media="(min-width: 1440px)" />
                <source srcSet={yourdayImageTablet} media="(min-width: 768px)" />
                <img className="md:w-[clamp(24.875rem,_calc(35.2679vw_+_7.9464rem),_39.6875rem)] md:h-100 object-cover" src={yourdayImageMobile} alt="Your Day at the Gallery" />
            </picture>
            <div className="space-y-6">
                <h2 className="text-h2 uppercase">Your Day at the Gallery</h2>
                <p className="text-p text-grey-700">Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
            </div>
        </section>
        <section className="grid gap-4
        md:gap-[clamp(0.6875rem,_calc(2.8274vw_-_0.6696rem),_1.875rem)] md:h-[45.0625rem]
        md:grid-cols-[auto_1fr] md:grid-rows-1">
            <picture className="md:w-[clamp(24.875rem,_calc(35.2679vw_+_7.9464rem),_39.6875rem)]">
                <source srcSet={deskroomImageDesktop} media="(min-width: 1440px)" />
                <source srcSet={deskroomImageTablet} media="(min-width: 768px)" />
                <img className="md:h-[45rem] md:w-full object-cover" src={deskroomImageMobile} alt="Deskroom" />
            </picture>
            {/* picture+text */}
            <div className="flex flex-col gap-4 md:gap-[clamp(0.75rem,_calc(2.9762vw_-_0.6786rem),_2rem)]">
                <picture>
                    <source srcSet={inspirationImageDesktop} media="(min-width: 1440px)" />
                    <source srcSet={inspirationImageTablet} media="(min-width: 768px)" />
                    <img className="md:h-[19.5625rem] md:w-full object-cover" src={inspirationImageMobile} alt="Inspiration" />
                </picture>
                <div className="bg-grey-900 px-6 py-12 text-white space-y-6
                md:h-full md:px-[clamp(2rem,_calc(2.381vw_+_0.8571rem),_3rem)]
                md:py-[clamp(4rem,_calc(-2.381vw_+_6.1429rem),_5rem)]">
                    <h2 className="text-h2 ">COME & BE INSPIRED</h2>
                    <p className="text-p ">We’re excited to welcome you to our gallery and see how our collections influence you.</p>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}