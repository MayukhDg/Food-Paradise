"use client"


import Image from 'next/image';
import toast from 'react-hot-toast';

 
const CartCard = ({id, name, quantity, price, cartItems, setCartitems, cartValue, setCartValue}) => {
  
  const addtoCart = (id, price)=>{
     toast.success("Added to Cart")
     
     const newCartItems = cartItems.map((item)=>{
        if(item.id===id){
           return {
            ...item,
            quantity:item.quantity+1
           }
        } else{
          return item;
        }
     })

     setCartitems(newCartItems);
     setCartValue((prev)=>{
          return prev + price
     })
  }
  
  
  
  const removeFromCart = (id, price) => {
    toast.error("Item removed from cart");

    setCartitems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === id);
  
      if (!existingItem) {
        // If item doesn't exist, return the cart unchanged
        toast.error("Item not found in cart");
        return prevCartItems;
      }
  
      if (existingItem.quantity === 1) {
        // Remove item completely if quantity is 1
        return prevCartItems.filter((item) => item.id !== id);
      } else {
        // Decrease the quantity of the item
        return prevCartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
    
    setCartValue((prev)=>{
      return prev-price
    })
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
        onClick={()=>addtoCart(id, price)}
      />
      <p>{quantity}</p>
      <Image
        src="/minus.svg"
        height={10}
        width={15}
        alt="add"
        onClick={()=>removeFromCart(id, price)}
      />
      </div>
      </div>
  )
}

export default CartCard