"use client"


 
const CartCard = ({id, name, quantity, price, cartItems, setCartitems, cartValue, setCartValue}) => {
  
  return (
    <div  className='flex min-h-[100px] justify-between items-center bg-teal-300 rounded-md px-5' >
      <div className='flex flex-col gap-4' >
      <p>{name} x {quantity} </p>
      <p>₹{price*quantity}</p>
      </div>
      <div className='flex gap-2 items-center' >
      <p>{quantity}</p>
      <button  onClick={()=>removeFromCart(id)}>
        Remove Item from Cart
      </button>
      </div>
      </div>
  )
}

export default CartCard