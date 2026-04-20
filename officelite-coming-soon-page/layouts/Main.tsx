import PriceCard from "../components/PriceCard";

export default function Main() {
  return (
    <main className=" bg-neutral-50
    lg:flex lg:justify-center
    ">
      <div className="px-4 grid justify-items-center gap-6 md:gap-[20px] lg:grid-cols-3 lg:w-[1110px] lg:gap-8 relative z-1">
        <PriceCard type="free" />
        <PriceCard type="basic" />
        <PriceCard type="ultimate" />
      </div>
    </main>
  );
}