import Card from "../component/Card";
import data from "../src/data.json";

export default function Main({ setCart, cart }: { setCart: (cart: any) => void, cart: any }) {
  return (
    <main className="lg:w-200">
      <h1 className="text-preset-1 rose-900 mb-8">Desserts</h1>
      <div className="grid grid-cols-1 gap-6 mb-8
      md:grid-cols-3 md:gap-y-8
      ">
        <Card data={data} setCart={setCart} cart={cart} />
      </div>
    </main>
  );
}