import arrowDown from "../../public/images/icon-arrow-down.svg";
import arrowUp from "../../public/images/icon-arrow-up.svg";
export default function CTA({ position }: { position: "header" | "footer" }) {
    return (
        <button className={`flex items-center gap-4 py-[18px] px-[clamp(21px,_0.2545vw_+_20.0458px,_22px)]
         border-2 rounded-[8px] mb-[20px] hover:cursor-pointer focus:ring-2 focus:ring-offset-3
        ${position === "header" ? "border-neutral-900 hover:bg-custom-gradient focus:ring-neutral-700" : "border-neutral-0 hover:bg-hover-gradient focus:ring-offset-neutral-900 focus:ring-neutral-0"}`}>
            <span className={`text-preset-6-mobile text-[clamp(16px,_0.5089vw_+_14.0916px,_18px)]
            ${position === "header" ? "text-neutral-900" :"text-neutral-0" }`}>REVIEW MEMBERSHIP OPTIONS</span>
            {position === "header" ? 
            <img src={arrowDown} alt="arrow down" /> : 
            <img src={arrowUp} alt="arrow up" />}
        </button>
    )
}