import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'

function Footer() {
    const words = " 🌐💹Track live crypto rates with real-time updates using Coinlayer APIs, Shadcn, and Aceternity UI. Get instant prices for BTC, ETH, BNB, and SOL in a sleek, user-friendly interface. Stay informed and ahead with this dynamic crypto tracker!";
  
      
  return (
    <div className='text-center px-44 h-1/2 font-sans flex items-center justify-center'>
        <TextGenerateEffect words={words}  />;
    </div>
  )
}

export default Footer