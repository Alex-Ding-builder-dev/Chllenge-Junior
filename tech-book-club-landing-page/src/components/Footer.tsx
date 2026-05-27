import CTA from "./CTA";
import Review from "./Review";
import bluesky from "../../public/images/logo-bluesky.svg";
import linkedin from "../../public/images/logo-linkedin.svg";

export default function Footer() {
    return (
        <footer className="rounded-t-[16px] bg-neutral-900 pt-[clamp(48px,_4.0712vw_+_32.7328px,_64px)]
        flex flex-col items-center">
            <div className="flex flex-col items-center px-[clamp(16px,_4.0712vw_+_0.7328px,_32px)]">
                <h2 className="text-preset-2-mobile text-[clamp(34px,_4.0712vw_+_18.7328px,_50px)]
                text-neutral-100 text-center mb-10">Ready to debug your reading list?</h2>
                <CTA position="footer" />
                <Review position="footer" />
            </div>
            <hr className="border-neutral-700 w-[clamp(343px,_108.1425vw_-_62.5344px,_768px)] md:w-full
            md:max-w-[1170px]" />
            <div className="flex flex-col items-center text-neutral-0 py-6 text-preset-7
            md:flex-row md:justify-between md:w-full md:px-8">
                <p className="mb-4 md:mb-0">© 2026 – Tech Book Club</p>
                <div className="flex items-center gap-6">
                    <a href="https://www.bluesky.com/"><img src={bluesky} alt="bluesky" /></a>
                    <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </footer>
    )
}