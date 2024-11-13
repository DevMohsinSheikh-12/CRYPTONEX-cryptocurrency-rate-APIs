import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='px-4 h-14 sticky top-0  bg-transparent bg-blend-saturation
    inset-x-0 w-full backdrop-blur-lg text-white
    border-b border-border z-50 '>
        <div className='flex items-center
        justify-between h-full mx-auto md:max-w-screen-xl'>
            <div className="flex items-start">
      <Link href="/" className='flex  items-start gap-2'>
     
      <span className='text-lg font-medium'>
   CRYPTONEX
      </span>
      </Link>
            </div>
            <nav className="hidden md:flex md:justify-end
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" >
              <ul className="flex items-center justify-center gap-8">
                <li className=" hover:text-slate-300">
                <Link href='/'>
                pricing
                </Link>
                </li>
                <li className=" hover:text-slate-300">
                <Link href='/'>
              About
                </Link>
                </li>
                <li className=" hover:text-slate-300">
                <Link href='/'>
                Features
                </Link>
                </li>
                <li className=" hover:text-slate-300">
                <Link href='/'>
               Blog
                </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
   
   
  
  
     <Link href='/'className={buttonVariants({size:"sm",variant:"ghost"})}>
     Login 
     </Link>
     <Link href='/'className={buttonVariants({size:"sm",className:"hidder md:flex"})}>
     Start Free Trial 
     </Link>
     


            </div>
        </div>
        
        
        </header>
  )
}

export default Navbar