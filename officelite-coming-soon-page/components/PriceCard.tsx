import { Link } from "react-router";
import pricing from "../public/assets/home/bg-pattern-pricing.svg";

type PriceCardType = {
    type: 'free' | 'basic' | 'ultimate'
}

export default function PriceCard({type}: PriceCardType) {
    const linkHover: string = type === 'basic' ? 'hover:bg-blue-100 transition' : 'hover:bg-blue-500 hover:text-white transition'
    const linkFocus: string = type === 'basic' ? 'focus:outline-2 focus:outline-offset-3 focus:outline-white' : 'focus:outline-2 focus:outline-offset-3 focus:outline-blue-100'
  return (
    <section className={`py-10 px-6 w-fit shadow-card rounded-[12px] grid place-items-center ${type !== 'basic' ? 'bg-neutral-0' : 'bg-blue-500 text-neutral-0'}
    md:flex md:p-12 md:w-[689px] md:justify-between relative overflow-hidden
    lg:w-[350px] lg:py-10 lg:px-5 lg:flex-col`}>
        {type === 'basic' &&
         <img src={pricing} alt="Pricing" className="hidden md:block lg:hidden absolute top-[-282px] right-[142px] w-[880px] max-w-none" />
        }
        <div className="w-[295px] grid place-items-center mb-12
        md:mb-0 md:place-items-start
        lg:place-items-center lg:mb-10">
            <p className="text-preset-2 mb-4 lg:mb-10">
                {type === 'ultimate' ?
                    'Ultimate' : type === 'free' ? 'Basic' : <><span className="lg:hidden">Basic</span><span className="hidden lg:block">Pro</span></>
                }
            </p>
            <p className="text-preset-1 text-[56px] mb-2">
                {type === 'free' ? 
                    'Free' : 
                    type === 'basic' ? 
                        '$9.99' : 
                        '$19.99'
                }
            </p>
            <p className="text-preset-4">
                {type === 'free' ? 'Up to 5 users for free' : 'Per user, billed monthly'}
            </p>
            <Link to="/signup" type="button" className={`hidden text-blue-500 text-preset-5 bg-blue-100 rounded-full py-3 px-10 cursor-pointer ${type === 'basic' ? 'bg-white' : ''}
        md:block md:mt-6 lg:hidden ${linkHover} ${linkFocus}`}>Try for Free</Link>
        </div>
        <div className={`text-preset-4 text-neutral-500 grid place-items-center gap-4 mb-12 ${type === 'basic' ? 'text-white' : ''}
        md:mb-0 lg:mb-10`}>
            <p>
                {type === 'free' ? 'Basic document collaboration' : type === 'basic' ? 'All essential integrations' : 'Robust work management'}
            </p>
            <p>
                {type === 'free' ? '2 GB storage' : type === 'basic' ? '50 GB  storage' : '100 GB storage'}
            </p>
            <p>
                {type === 'free' ? 'Great security and support' : type === 'basic' ? 'More control and insights' : 'VIP support'}
            </p>
        </div>
        <Link to="/signup" type="button" className={`text-blue-500 text-preset-5 bg-blue-100 rounded-full py-3 px-10 cursor-pointer ${type === 'basic' ? 'bg-white' : ''}
        md:hidden lg:block ${linkHover} ${linkFocus}`}>Try for Free</Link>
    </section>
  );
} 