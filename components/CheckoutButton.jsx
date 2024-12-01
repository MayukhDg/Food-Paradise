import React from 'react'
import Checkout from './Checkout'

const CheckoutButton = ({cartValue, userId}) => {
  return (
    <div>
        <Checkout cartValue={cartValue}  userId={userId}/>
    </div>
  )
}

export default CheckoutButton