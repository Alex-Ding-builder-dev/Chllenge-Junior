
import addToCartIcon from "../public/images/icon-add-to-cart.svg";

export default function Card({ data, setCart ,cart}: { data: any, setCart: (cart: any) => void, cart: any }) {
    const handleAddToCart = (name: string) => {
        setCart((prev: any) => 
          prev.map((item: any) => 
            item.name === name ?
            {
              ...item,
              number: item.number + 1
            } :
              item
          )

        );
    }
    const handleMinusFromCart = (name: string) => {
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
    return (
      <>
      {data.map((item: any)=>{
        const cartItem = cart.find((cartItem: any) => cartItem.name === item.name);
        const isClick = () => cartItem?.number > 0;
        return (
          <div key={item.name} className="flex flex-col items-center">
            <picture className={`rounded-[8px] overflow-hidden ${isClick() ? 'border-2 border-red rounded-[8px]' : ''}`}>
              <source srcSet={item.image.desktop} media="(min-width: 1440px)" />
              <source srcSet={item.image.tablet} media="(min-width: 768px)" />
              <img src={item.image.mobile} alt={item.name} className="object-cover" />
            </picture>
            <button type="button" className={`rounded-full  text-preset-4-Bold cursor-pointer border  flex items-center gap-2
            -mt-[22px] mb-4  ${isClick() ? 'bg-red text-white border-red w-[160px] justify-between p-3' : 'text-rose-900 border-rose-400 bg-white hover:text-red hover:border-red py-3 px-[27.5px]'}
            `}
            onClick={!isClick() ? ()=>handleAddToCart(item.name) : undefined}>
              <img src={addToCartIcon} alt="Add to Cart" className={isClick() ? 'hidden' : ''}/>
              <div className={`rounded-full border ${isClick() ? 'w-[17.5px] h-[17.5px] grid place-items-center hover:bg-white group cursor-pointer transition-colors' : 'hidden'}`}
              onClick={()=>handleMinusFromCart(item.name)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path className="group-hover:fill-red transition-colors" fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
              </div>
              {isClick() ? `${cartItem?.number}` :  'Add to Cart'}
              <div className={`rounded-full border ${isClick() ? 'w-[17.5px] h-[17.5px] grid place-items-center hover:bg-white group cursor-pointer transition-colors' : 'hidden'}`}
              onClick={()=>handleAddToCart(item.name)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className="group-hover:fill-red transition-colors" fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
              </div>
            </button>
            <div className="w-full flex flex-col gap-1">
              <p className="text-preset-4 text-rose-500">{item.category}</p>
              <h3 className="text-preset-3 text-rose-900">{item.name}</h3>
              <p className="text-preset-3 text-red">${item.price.toFixed(2)}</p>
            </div>
          </div>
        )
      })}
      </>
  );
}