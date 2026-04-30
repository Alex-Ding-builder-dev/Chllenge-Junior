import Main from '../layers/Main';
import Aside from '../layers/Aside';
import { useState } from 'react';
import data from './data.json';
import ConfirmOrder from '../component/ConfirmOrder';

export default function App() {

  type Cart = {
    name: string;
    number: number;
    price: number;
  }

  const array = data.map((item) => {
    return {
      name: item.name,
      number: 0,
      price: item.price,
    }
  });

  const [cart, setCart] = useState<Cart[]>(array);
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);
  return (
    <>
        <Main setCart={setCart} cart={cart} />
        <Aside setCart={setCart} cart={cart} setIsConfirmOrder={setIsConfirmOrder} />
        {isConfirmOrder && <ConfirmOrder setIsConfirmOrder={setIsConfirmOrder} cart={cart} setCart={setCart} />}
    </>
  );
}