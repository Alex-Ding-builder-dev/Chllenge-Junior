import readTogetherMobile from "../../public/images/image-read-together-mobile.webp";
import readTogetherTablet from "../../public/images/image-read-together-tablet.webp";
import readTogetherDesktop from "../../public/images/image-read-together-desktop.webp";
import notAverageMobile from "../../public/images/image-not-average-mobile.webp";
import notAverageTablet from "../../public/images/image-not-average-tablet.webp";
import notAverageDesktop from "../../public/images/image-not-average-desktop.webp";
import check from "../../public/images/icon-check.svg";
import logos from "../../public/images/logos-tech.svg";
import PriceCard from "./PriceCard";
import FiveStar from "./FiveStar";
export default function Main() {
    return (
        <main className="px-[clamp(16px,_4.0712vw_+_0.7328px,_32px)] py-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]">
            <section className="mb-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]">
                <div className="mb-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]">
                    <div>
                        <h2 className="text-preset-2-mobile text-[clamp(34px,_4.0712vw_+_18.7328px,_50px)]
                        text-neutral-900 mb-[clamp(24px,_2.5445vw_+_14.458px,_34px)]">Read together,
                        grow together</h2>
                        <ul className="text-preset-5 text-neutral-700 flex flex-col gap-[clamp(16px,_2.0356vw_+_8.3664px,_24px)]
                        mb-10">
                            <li className="flex items-center gap-[14px]">
                                <img src={check} alt="check" />
                                Monthly curated tech reads selected by industry experts
                            </li>
                            <li className="flex items-center gap-[14px]">
                                <img src={check} alt="check" />
                                Virtual and in-person meetups for deep-dive discussions
                            </li>
                            <li className="flex items-center gap-[14px]">
                                <img src={check} alt="check" />
                                Early access to new tech book releases
                            </li>
                            <li className="flex items-center gap-[14px]">
                                <img src={check} alt="check" />
                                Author Q&A sessions with tech thought leaders
                            </li>
                        </ul>
                    </div>
                    <picture>
                        <source srcSet={readTogetherTablet} media="(min-width: 768px)" />
                        <source srcSet={readTogetherDesktop} media="(min-width: 1440px)" />
                        <img src={readTogetherMobile} alt="read together image"
                        className="rounded-[clamp(16px,_1.5267vw_+_10.2748px,_22px)] w-[clamp(343px,_91.8575vw_-_1.4656px,_704px)]
                        h-[clamp(318.5px,_85.2952vw_-_1.3569px,_653.71px)] object-cover object-left" />
                    </picture>
                </div>
                <div className="relative">
                    <div className="mb-10">
                        <h2 className="text-preset-2 text-neutral-900 text-[clamp(34px,_4.0712vw_+_18.7328px,_50px)]
                        mb-6">Not your average book club</h2>
                        <p className="text-preset-5 text-neutral-700">Connect with a community that speaks your language - from Python to TypeScript and everything in between. Our discussions blend technical depth with practical applications.</p>
                    </div>
                    <picture>
                        <source srcSet={notAverageTablet} media="(min-width: 768px)" />
                        <source srcSet={notAverageDesktop} media="(min-width: 1440px)" />
                        <img src={notAverageMobile} alt="not average image"
                        className="rounded-[clamp(16px,_1.5267vw_+_10.2748px,_22px)] w-[clamp(343px,_91.8575vw_-_1.4656px,_704px)]
                        h-[clamp(318.5px,_85.2952vw_-_1.3569px,_653.71px)] object-cover object-left" />
                    </picture>
                    <img src={logos} alt="tech logos"
                    className="hidden md:block absolute bottom-[50.47px] right-[50.44px]" />
                </div>
            </section>

            <section className="bg-neutral-100 py-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]
            px-[clamp(16px,_4.0712vw_+_0.7328px,_32px)] rounded-[12px]
            mb-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]">
                <h2 className="text-preset-2 text-neutral-900 text-[clamp(34px,_4.0712vw_+_18.7328px,_50px)]
                mb-[clamp(32px,_4.0712vw_+_16.7328px,_48px)]">Your tech reading journey</h2>
                <ol className="text-preset-6-mobile text-neutral-900 text-[clamp(16px,_0.5089vw_+_14.0916px,_18px)]
                flex flex-col gap-[clamp(32px,_2.0356vw_+_24.3664px,_40px)]">
                    <li className="flex flex-col gap-[clamp(20px,_1.0178vw_+_16.1832px,_24px)]">
                        <div className="border-2 rounded-[4px] w-[clamp(32px,_2.0356vw_+_24.3664px,_40px)]
                        h-[clamp(32px,_2.0356vw_+_24.3664px,_40px)] grid place-items-center">1</div>
                        Choose your membership tier
                    </li>
                    <li className="flex flex-col gap-[clamp(20px,_1.0178vw_+_16.1832px,_24px)]">
                        <div className="border-2 rounded-[4px] w-[clamp(32px,_2.0356vw_+_24.3664px,_40px)]
                        h-[clamp(32px,_2.0356vw_+_24.3664px,_40px)] grid place-items-center">2</div>
                        Get your monthly book selection
                    </li>
                    <li className="flex flex-col gap-[clamp(20px,_1.0178vw_+_16.1832px,_24px)]">
                        <div className="border-2 rounded-[4px] w-[clamp(32px,_2.0356vw_+_24.3664px,_40px)]
                        h-[clamp(32px,_2.0356vw_+_24.3664px,_40px)] grid place-items-center">3</div>
                        Join our discussion forums
                    </li>
                    <li className="flex flex-col gap-[clamp(20px,_1.0178vw_+_16.1832px,_24px)]">
                        <div className="border-2 rounded-[4px] w-[clamp(32px,_2.0356vw_+_24.3664px,_40px)]
                        h-[clamp(32px,_2.0356vw_+_24.3664px,_40px)] grid place-items-center">4</div>
                        Attend exclusive meetups
                    </li>
                </ol>
            </section>

            <section className="mb-[clamp(64px,_4.0712vw_+_48.7328px,_80px)]">
                <h2 className="text-preset-2 text-neutral-900 text-[clamp(34px,_4.0712vw_+_18.7328px,_50px)]
                mb-[clamp(24px,_4.0712vw_+_8.7328px,_40px)]">Membership options</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <PriceCard tier="starter" />
                    <PriceCard tier="pro" />
                    <PriceCard tier="enterprise" />
                </div>
            </section>

            <figure>
                <FiveStar />
                <blockquote className="mt-8 text-preset-3-mobile text-neutral-900 text-[clamp(24px,_2.5445vw_+_14.458px,_34px)]
                mb-8">
                    <p>"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>
                </blockquote>
                <figcaption>
                    <cite className="text-preset-5 text-neutral-700 not-italic">Sarah Chen, Software Architect</cite>
                </figcaption>
            </figure>
        </main>
    )
}