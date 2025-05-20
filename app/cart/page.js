"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'
import CartCard from '@/components/CartCard'
import Checkout from '@/components/Checkout'
import { useCartStore } from '@/store/cartstore'

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const cartValue = useCartStore((state) => state.cartValue);
  const setCartValue = useCartStore((state) => state.setCartValue);

  const { user } = useUser()

  return (
    <div className='min-h-screen bg-slate-950 p-10' >
      { cartItems.map((item) => (
        <CartCard cartItems={cartItems} setCartitems={setCartItems} cartValue={cartValue} setCartValue={setCartValue} key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price}  />
      )) }
      <div className='flex flex-col gap-3 mt-5' >
        <p  className='text-white font-semibold' >Total: ₹{cartValue}</p>
        <Checkout cartValue={cartValue}  userId={user?.id.toString()} />
      </div>
    </div>
  )
}

export default Cart