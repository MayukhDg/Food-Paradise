"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  
  const router = useRouter();
  
  return (
    <section className='flex h-screen md:flex-row flex-col'>
     <div className='  py-8 w-full flex bg-cyan-950 md:w-1/2 relative flex-col justify-center pl-6'>
      <div className='flex-col gap-5 flex' >
      <h1 className='text-4xl tracking-[1px] font-bold'>Welcome to 
        <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-200'> Food Paradise</span>
        </h1>
         <Button className="max-w-[100px]" variant="outline" onClick={()=>router.push("/products")}>
          Order Now
         </Button>
        </div> 
      <Image
       src="/large-burger.png"
       className='absolute right-[-220px] hidden md:block'
       height={300}
       width={300}
       alt='large burger'
     />
     </div>
     <div className='flex bg-white w-full md:w-1/2'>
     </div>
    </section>
  )
}

export default page