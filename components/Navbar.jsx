import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants/navlinks'
import MobileMenu from './MobileMenu'


const Navbar = () => {
  return (
    <nav className='p-3 flex justify-between items-center'>
    <SignedOut>
    <Link  href={"/sign-in"}>
     Sign In    
    </Link>
    </SignedOut>
    <SignedIn>
      <UserButton/>
      <ul className='hidden md:flex gap-3  pr-8' >
        { navLinks.map((item)=>(
          <Link href={item.href}  key={item.label}>
           <li className='hover:font-bold font-light' >{item.label}</li>
          </Link>
        )) }
      </ul>
      <MobileMenu/>
    </SignedIn>
    </nav>
  )
}

export default Navbar