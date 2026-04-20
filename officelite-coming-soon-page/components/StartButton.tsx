import { Link } from "react-router";

export default function StartButton() {
  return (
    <Link to="/signup" type="button" className="text-preset-5 text-neutral-0 rounded-full bg-blue-500 py-3 px-10 w-[170px] shadow-button cursor-pointer
    relative z-1 hover:bg-blue-300 transition focus:outline-2 focus:outline-offset-3 focus:outline-blue-500">Get Started</Link>
  );
}