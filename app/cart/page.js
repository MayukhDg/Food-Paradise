"use client"


import { GlobalContext } from '@/Context/GlobalContext'
import React, { useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import CartCard from '@/components/CartCard'
import Checkout from '@/components/Checkout'

const Cart = () => {
  
  const { cartValue, cartItems  } = useContext(GlobalContext)
  
  const { user } = useUser()
  
  return (
    <div>
      { cartItems.map((item)=>(
        <CartCard key={item.id} name={item.name} quantity={item.quantity} price={item.price}  />
      )) }
      <Checkout cartValue={cartValue}  userId={user?.id.toString()} />
    </div>
  )
}

export default Cart