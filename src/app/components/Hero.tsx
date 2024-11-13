import React from 'react'
import { SiBitcoinsv } from "react-icons/si";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient.tsx'

import { Vortex } from '@/components/ui/vortex'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import Link from 'next/link'

const words =[
   {
      text:"Your Gateway to Real-Time",
   
      
   },
   {
      text:" Crypto",
   
      
   },
   {
      text:"Insights.",
      className:"text-blue-600  dark:text-blue-500"
   }
]
function Hero() {
   return (
 <div className='flex flex-row justify-center'>
      <div className="w-screen mx-auto rounded-md  h-[38rem] pb-52 overflow-hidden ">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <h2 className="text-white text-2xl md:text-6xl font-sans text-center">
         
        <TypewriterEffectSmooth words={words}  className='mt-[350px] ' />
        </h2>
        <p className="text-slate-300 text-sm md:text-2xl max-w-xl mt-28 mb-12 text-center">
        Crypto Never Sleeps. 🚀 Get instant updates on rates and trends, faster, and better!
        </p>
   <Link href={"/rates"}>
   
    <HoverBorderGradient>
        <div className=' flex justify-center  '>

        <SiBitcoinsv className='mt-[4px] text-[19px] mr-[7px]'/>
     Find Crypto Rates
        </div>
    </HoverBorderGradient>
   </Link>
      </Vortex>
    </div>
 </div>
  )
}

export default Hero