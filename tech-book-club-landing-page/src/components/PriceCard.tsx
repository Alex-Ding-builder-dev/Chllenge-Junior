import check from "../../public/images/icon-check.svg";
export default function PriceCard({ tier }: { tier: "starter" | "pro" | "enterprise" }) {
    return (
        <>
        {tier === "starter" && (
            <div className="p-6 rounded-[8px] border border-neutral-200
            lg:w-[286px] lg:h-[358px]">
                <h3 className="text-preset-4 text-neutral-900 mb-6">Starter</h3>
                <p className="text-preset-3 text-neutral-900 flex items-center gap-2">$19 
                    <span className="text-preset-5 text-neutral-700">/month</span>
                </p>
                <hr className="border-neutral-200 my-6" />
                <ul className="text-preset-5 text-neutral-700 flex flex-col gap-4 mb-8">
                    <li className="flex items-center gap-3"><img src={check} alt="check" />1 book/month</li>
                    <li className="flex items-center gap-3"><img src={check} alt="check" />Online forums</li>
                </ul>
                <button className="bg-salmon-50 w-full text-neutral-900 border-2 border-neutral-900
                rounded-[8px] py-[20px] text-preset-6-mobile text-[clamp(16px,_0.5089vw_+_14.0916px,_18px)]
                hover:cursor-pointer hover:bg-custom-gradient
                focus:ring-2 focus:ring-offset-3 focus:ring-neutral-700">SUBSCRIBE NOW</button>
            </div>
        )}
        {tier === "pro" && (
            <div className="p-6 rounded-[8px] border border-neutral-200 bg-neutral-100
            lg:w-[350px] lg:h-[390px]">
            <h3 className="text-preset-4 text-neutral-900 mb-6">Pro</h3>
            <p className="text-preset-3 text-neutral-900 flex items-center gap-2">$29 
                <span className="text-preset-5 text-neutral-700">/month</span>
            </p>
            <hr className="border-neutral-200 my-6" />
            <ul className="text-preset-5 text-neutral-700 flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3"><img src={check} alt="check" />2 books/month</li>
                <li className="flex items-center gap-3"><img src={check} alt="check" />Virtual meetups</li>
            </ul>
            <button className="bg-salmon-50 w-full text-neutral-900 border-2 border-neutral-900
            rounded-[8px] py-[20px] text-preset-6-mobile text-[clamp(16px,_0.5089vw_+_14.0916px,_18px)]
            hover:cursor-pointer hover:bg-custom-gradient
            focus:ring-2 focus:ring-offset-3 focus:ring-neutral-700">SUBSCRIBE NOW</button>
        </div>
        )}
        {tier === "enterprise" && (
            <div className="p-6 rounded-[8px] border border-neutral-200
            lg:w-[286px] lg:h-[358px]">
            <h3 className="text-preset-4 text-neutral-900 mb-6">Enterprise</h3>
            <p className="text-preset-3 text-neutral-900 flex items-center gap-2">Custom
            </p>
            <hr className="border-neutral-200 my-6" />
            <ul className="text-preset-5 text-neutral-700 flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3"><img src={check} alt="check" />Team access</li>
                <li className="flex items-center gap-3"><img src={check} alt="check" />Private sessions</li>
            </ul>
            <button className="bg-salmon-50 w-full text-neutral-900 border-2 border-neutral-900
            rounded-[8px] py-[20px] text-preset-6-mobile text-[clamp(16px,_0.5089vw_+_14.0916px,_18px)]
            hover:cursor-pointer hover:bg-custom-gradient
            focus:ring-2 focus:ring-offset-3 focus:ring-neutral-700">TALK TO US</button>
        </div>
        )}
        </>
    )
}