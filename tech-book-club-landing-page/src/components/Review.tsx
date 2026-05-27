import avatar from "../../public/images/image-avatars.webp";
import FiveStar from "./FiveStar";

export default function Review({ position }: { position: "header" | "footer" }) {
    return (
        <div className="flex items-center gap-3 mb-16">
            <img className="w-[110px] h-[40px]" src={avatar} alt="avatars" />
            <figure>
                <FiveStar />
                <figcaption className={`mt-1
                ${position === 'header' ? 'text-neutral-700' : 'text-neutral-0'} text-preset-7`}>
                    <p>200+ developers joined already</p>
                </figcaption>
            </figure>
        </div>
    )
}