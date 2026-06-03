import arrowRight from "../../public/icon-arrow-right.svg";
import arrowLeft from "../../public/icon-arrow-left.svg";
import { Link } from "react-router";
export default function Button({ position }: { position: 'home' | 'location' }) {
  return (
    <>
        {position === 'home' && (
        <Link to="/location" className="text-button uppercase flex w-[17.2rem] h-[4.5rem]
        cursor-pointer group focus:outline-4 focus:outline-gold-500 focus:outline-offset-3 transition">
            <span className="bg-grey-900 px-[2.0938rem] py-[1.625rem] block
            group-hover:bg-gold-500 transition-colors">Our location</span>
            <img className="bg-gold-500 p-[1.5rem] h-full transition-colors
            group-hover:bg-grey-900" src={arrowRight} alt="arrow right" />
        </Link>
        )}
        {position === 'location' && (
        <Link to="/" className="text-button uppercase flex w-[17.5rem] h-[4.5rem]
        cursor-pointer group focus:outline-4 focus:outline-gold-500 focus:outline-offset-3 transition
        ">
            <img className="bg-gold-500 p-[1.5rem] h-full transition-colors
            group-hover:bg-grey-900" src={arrowLeft} alt="arrow left" />
            <span className="bg-grey-900 px-[2.0938rem] py-[1.625rem] block
            group-hover:bg-gold-500 transition-colors">Back to home</span>
        </Link>
        )}
    </>
  );
}