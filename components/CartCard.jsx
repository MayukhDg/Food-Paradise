"use client"


import { useCartStore } from '@/store/cartstore';
import Image from 'next/image';
import toast from 'react-hot-toast';

 
const CartCard = ({id, name, quantity, price, cartItems, setCartitems, cartValue, setCartValue}) => {
  
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (id, name, price) => {
    const item = { id, name, price };
    toast.success("Item added to cart", {
      position:"bottom-center",
      duration: 1000,
    })
    addToCart(item);
  };
  
  
  const handleRemove = (id, price) => {
    removeFromCart(id, price);
    toast.error("Item removed from cart", {
      position:"bottom-center",
      duration: 1000,
    });
  };
  
  return (
    <div  className='flex mt-5 flex-1 min-h-[100px] justify-between items-center bg-teal-300 rounded-md px-5' >
      <div className='flex flex-col gap-4' >
      <p>{name} x {quantity} </p>
      <p>₹{price*quantity}</p>
      </div>
      <div className='flex gap-2 items-center' >
      <Image
        src="/plus.svg"
        height={10}
        width={15}
        alt="add"
        onClick={()=>handleAddToCart(id, name, price)}
      />
      <p>{quantity}</p>
      <Image
        src="/minus.svg"
        height={10}
        width={15}
        alt="add"
        onClick={()=>handleRemove(id, price)}
      />
      </div>
      </div>
  )
}

export default CartCard