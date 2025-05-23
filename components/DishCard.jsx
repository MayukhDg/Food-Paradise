"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import toast from 'react-hot-toast';
import { useCartStore } from '@/store/cartstore'

const DishCard = ({id, description, price, name}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (id, name, price) => {
    const item = { id, name, price };

    toast.success("Item added to cart", {
      position:"bottom-center",
      duration: 1000,
    })
    addToCart(item);
  };

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
        <Button onClick={() => handleAddToCart(id, name, price)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default DishCard