import emptyCart from "../public/images/illustration-empty-cart.svg";
import carbonNeutral from "../public/images/icon-carbon-neutral.svg";

export default function Aside({ setCart, cart, setIsConfirmOrder }: { setCart: (cart: any) => void, cart: any, setIsConfirmOrder: (isConfirmOrder: boolean) => void }) {
  const handleTotalNumber = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += item.number;
    });
    return total;
  }
  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += item.price * item.number;
    });
    return total;
  }
  const handleRemoveFromCart = (name: string) => {
    setCart((prev: any) => 
      prev.map((item: any) => 
        item.name === name ?
        {
          ...item,
          number: item.number - 1
        } :
        item
      )
    );
  }
  const handleConfirmOrder = () => {
    setIsConfirmOrder(true);
  }
  return (
    <aside className="p-6 bg-white rounded-[12px] 
    lg:w-[384px] lg:h-fit">
      <h2 className="text-preset-2 text-red mb-6">Your Cart ({handleTotalNumber()})</h2>
      {handleTotalNumber() <= 0 ?
        <article className="py-4 flex flex-col items-center">
        <img src={emptyCart} alt="Empty Cart" className="mb-4" />
        <p className="text-preset-4-Bold text-rose-500">Your added items will appear here</p>
      </article> :

      <>
      <article className="">
        {cart.filter((item: any) => item.number > 0).map((item: any) => (
          <div key={item.name}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-preset-4-Bold text-rose-900 mb-2">{item.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-preset-4-Bold text-red mr-2">{item.number}x</span><span className="text-preset-4 text-rose-500">@ ${item.price.toFixed(2)}</span><span className="text-preset-4-Bold text-rose-500">${(item.price * item.number).toFixed(2)}</span>
                </div>
              </div>
              <button className="cursor-pointer border rounded-full w-[17.5px] h-[17.5px] grid place-items-center border-rose-400
              group hover:border-rose-900 transition-colors"
              onClick={() => handleRemoveFromCart(item.name)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className="group-hover:fill-rose-900 transition-colors" fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
              </button>
            </div>
            <div className="h-px w-full bg-rose-100 my-4"></div>
          </div>
        ))}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-preset-4 text-rose-900">Order Total</h3>
          <span className="text-preset-2 text-rose-900">${handleTotalPrice().toFixed(2)}</span>
        </div>
      </article>
      <p className="text-preset-4 text-rose-900 flex items-center bg-rose-50 py-4 rounded-[8px] text-nowrap mb-6 justify-center">
        <img src={carbonNeutral} alt="Carbon Neutral"  className="mr-2"/>
        This is a <span className="text-preset-4-Bold mx-1">carbon-neutral</span> delivery
      </p>
      <button className="text-preset-3 text-white bg-red rounded-full py-4 flex items-center justify-center w-full relative overflow-hidden group cursor-pointer"
      onClick={handleConfirmOrder}>
        <div className="bg-black/25 absolute top-0 left-0 w-full h-full opacity-0 transition group-hover:opacity-100"></div>
        <span className="relative z-10">Confirm Order</span></button>
      </>
    }
    </aside>
  );
}