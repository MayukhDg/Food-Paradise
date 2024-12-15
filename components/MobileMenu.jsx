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
     <SheetContent className="w-[300px]" > 
     <SheetTitle>Menu</SheetTitle> 
       <SheetClose>
       <Image
         src="/minus.svg"
         height={40}
         width={40}
         alt='menu close'
       />
        </SheetClose> 
     </SheetContent>
    </Sheet>
  )
}

export default MobileMenu