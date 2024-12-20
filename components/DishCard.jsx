"use client"

import React, { useContext } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GlobalContext } from '@/Context/GlobalContext'
import toast from 'react-hot-toast';

const DishCard = ({id, description, price, name}) => {
  
const {  setCartitems, cartItems, cartValue, setCartValue } = useContext(GlobalContext)
 

 const addtoCart = (id, name, description, price) => {
  
  toast.success("Item added to cart", {
    position:"bottom-center"
  }) 
  setCartitems((prevCartItems) => {
    // Check if the item already exists in the cart
    const isItemInCart = prevCartItems.some((item) => item.id === id);

    if (!isItemInCart) {
      // If the item is not in the cart, add it
      return [
        ...prevCartItems,
        {
          id,
          name,
          description,
          price,
          quantity: 1,
        },
      ];
    } else {
      // If the item is in the cart, update its quantity
      return prevCartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ); 
    }
    
  });
   
  setCartValue((prev)=>{
    return prev+price
  })
  
}  ;


return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>
      {description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
      </CardDescription>
    </CardHeader>
    <CardContent>₹{price}</CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={()=>addtoCart(id, name, description, price)} >Add to Cart</Button>
    </CardFooter>
  </Card>
  )
}

export default DishCard