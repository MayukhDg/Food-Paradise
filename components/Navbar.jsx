import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='p-3'>
    <SignedOut>
    <Link  href={"/sign-in"}>
     Sign In    
    </Link>
    </SignedOut>
    <SignedIn>
        <UserButton/>
    </SignedIn>
    </nav>
  )
}

export default Navbar