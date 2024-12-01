"use client"


import { GlobalContext } from '@/Context/GlobalContext'
import React, { useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import CartCard from '@/components/CartCard'
import CheckoutButton from '@/components/CheckoutButton'

const Cart = () => {
  
  const { cartValue, cartItems  } = useContext(GlobalContext)
  
  const { user } = useUser()
  console.log(user.id) 
  
  
  return (
    <div>
      { cartItems.map((item)=>(
        <CartCard key={item.id} name={item.name} quantity={item.quantity} price={item.price}  />
      )) }
      <CheckoutButton cartValue={cartValue}  userId={user.id} />
    </div>
  )
}

export default Cart