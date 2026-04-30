import confirmOrder from "../public/images/icon-order-confirmed.svg";
import data from "../src/data.json";

export default function ConfirmOrder({ setIsConfirmOrder, cart, setCart }: { setIsConfirmOrder: (isConfirmOrder: boolean) => void, cart: any, setCart: (cart: any) => void }) {
    const handleNewOrder = () => {
        setIsConfirmOrder(false);
        setCart(data.map((item: any) => {
            return {
              name: item.name,
              number: 0,
              price: item.price,
            }
          }));
    }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-end z-20
    md:items-center md:px-10">
      <div className="bg-white rounded-t-[12px] w-full max-w-[688px] p-6 pt-10
      md:rounded-[12px] md:p-10
      lg:max-w-[592px] max-h-[90vh]">
        <img src={confirmOrder} alt="confirm order" className="mb-6" />
        <h1 className="text-preset-1 text-rose-900 mb-2">Order Confirmed</h1>
        <p className="font-red-hat text-[16px] text-rose-500 mb-8">We hope you enjoy your food!</p>

        <article className="bg-rose-50 p-6 rounded-[8px] mb-8 overflow-y-auto max-h-[50vh]">
            {cart.filter((item: any) => item.number > 0).map((item: any, index: number) => {
                const dataItem = data.find((dataItem: any) => dataItem.name === item.name);
                return (
                    <>
                        <div key={dataItem?.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center">
                                <img src={dataItem?.image?.thumbnail} alt={dataItem?.name} className="w-12 h-12 rounded-[4px] mr-4" />
                                <div className="flex flex-col mr-2 gap-2">
                                    <h2 className="text-preset-4-Bold text-rose-900 whitespace-nowrap text-ellipsis overflow-hidden">{dataItem?.name}</h2>
                                    <p className="text-preset-4-Bold text-red shrink-0">{item.number}x <span className="text-preset-4 text-rose-500 ml-3">@ ${dataItem?.price.toFixed(2)}</span></p>
                                </div>
                            <p className="text-preset-3 text-rose-900">${(item.number * item.price).toFixed(2)}</p>
                        </div>
                        {index !== cart.filter((item: any) => item.number > 0).length - 1 && <hr className="border-rose-100 my-4" />}
                    </>
                )
            })}
        <hr className="border-rose-100 my-6" />
        <div className="flex justify-between items-center">
            <p className="text-preset-4 text-rose-900">Order Total</p>
            <p className="text-preset-2 text-rose-900">${cart.filter((item: any) => item.number > 0).reduce((acc: number, item: any) => acc + item.number * item.price, 0).toFixed(2)}</p>
        </div>
        </article>


        <button onClick={handleNewOrder} className="text-preset-3 text-white bg-red rounded-full py-4 flex items-center justify-center w-full">
          <span className="relative z-10">Start New Order</span>
        </button>
      </div>
    </div>
  )
}