"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from "motion/react"

const page = () => {
  
  const router = useRouter();
  
  return (
    <section className='flex min-h-screen md:flex-row flex-col overflow-hidden'>
     <div className='  py-8 w-full flex bg-cyan-950 md:w-1/2 relative flex-col justify-center pl-6'>
      <div className='flex-col gap-5 flex' >
      <h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight leading-tight sm:text-5xl sm:leading-tight'>Welcome to 
        <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-200'> Food Paradise</span>
        </h1>
         <Button className="max-w-[100px]"  onClick={()=>router.push("/products")}>
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
     <div className='flex bg-white w-full md:w-1/2 justify-center md:justify-end items-center'>
     <div className=' items-center flex flex-col md:gap-8 gap-4' >
     <motion.h2
     className=' md:mt-0 mt-4 mr-8 text-3xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight leading-tight sm:text-4xl sm:leading-tight'
       initial={{x:400}}
       animate={{x:0}}
       transition={{ duration: 0.3, delay: 1, ease: "easeIn" }}
       

     >
      The best in town
     </motion.h2>
     <motion.img
                src='/pizza.png'
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    
                }}
                className= 'mr-10 md:mt-0 mt-3'
                animate={{ rotate: [0, 180] }}
                transition={{
                    duration: 1,
                    repeat: 2,
                    repeatType: "reverse"
                }}
            />
     </div>
     </div>
    </section>
  )
}

export default page