"use client"

import Image from 'next/image'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from '@/constants/navlinks'
import Link from 'next/link'
import { useCartStore } from '@/store/cartstore'

const MobileMenu = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Sheet>
      <SheetTrigger className='md:hidden block'>
        <Image
          src="/menu.svg"
          height={30}
          width={30}
          alt='menu'
          className=''
        />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]" >
        <SheetTitle>Menu</SheetTitle>
        <SheetClose/>
        <ul className='flex flex-col gap-4 items-center' >
          { navLinks.map((item)=>{
            if(item.label==="Cart"){
              return (
                <Link href={item.href}  key={item.label}>
                  <li className='hover:font-bold font-light' >
                    <SheetClose>
                      { `Cart (${cartItems.length}) `} 
                    </SheetClose>
                  </li>
                </Link>
              )
            } else{
              return(
                <Link href={item.href}  key={item.label}>
                  <li className='hover:font-bold font-light' >
                    <SheetClose>
                      {item.label}
                    </SheetClose>
                  </li>
                </Link>
              )
            }
          }) }
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu