import logo from "../../public/images/logo.svg";
import CTA from "./CTA";
import Review from "./Review";
import heroMobile from "../../public/images/image-hero-mobile.webp";
import heroTablet from "../../public/images/image-hero-tablet.webp";
import heroDesktop from "../../public/images/image-hero-desktop.webp";
export default function Header() {
    return (
        <header className="px-[clamp(16px,_4.0712vw_+_0.7328px,_32px)] pt-[clamp(24px,_2.0356vw_+_16.3664px,_32px)] pb-20
        bg-neutral-100">
                <img src={logo} alt="tech book club brand logo" 
                className="mb-[clamp(48px,_4.0712vw_+_32.7328px,_64px)]"/>
                <section>

                    <div>
                        <h1 className="t1m-1 text-transparent bg-clip-text bg-text-gradient mb-6">Join the ultimate tech book club</h1>
                        <p className="text-preset-5 text-neutral-700 mb-8">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                        <CTA position="header" />
                        <Review position="header" />
                    </div>

                    <picture>
                        <source srcSet={heroDesktop} media="(min-width: 1440px)" />
                        <source srcSet={heroTablet} media="(min-width: 768px)" />
                        <img src={heroMobile} alt="tech book club hero image"
                        className="rounded-[clamp(6px,_1.5267vw_+_0.2748px,_12px)] w-[clamp(343px,_91.8575vw_-_1.4656px,_704px)]
                         h-[clamp(384.92px,_103.084vw_-_1.6449px,_790.04px)] object-cover object-left
                         " />
                    </picture>
                </section>
        </header>
    )
}