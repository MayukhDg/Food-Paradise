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
import { Button } from './ui/button'
import { navLinks } from '@/constants/navlinks'
import Link from 'next/link'

const MobileMenu = () => {
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
        {   navLinks.map((link, idx)=>(
          
          <li className='font-light text-lg'  key={idx}>
            <Link href={link.href} >
           <SheetClose>
           { link.label }
            </SheetClose> 
            </Link>       
            </li> 
           
        ))}
        </ul> 
     </SheetContent>
    </Sheet>
  )
}

export default MobileMenu