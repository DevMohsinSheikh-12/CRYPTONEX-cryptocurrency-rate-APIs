"use client";
import { useState, useEffect } from "react";

import React from 'react'


import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function CoinMarket() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getCryptoRates");
        if (!response.ok) throw new Error("Failed to fetch data");

        const jsonConverted = await response.json();
        setData(jsonConverted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <><div>

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Some Updated Crypto Rates
        </motion.h1>
      </LampContainer>

    </div>
    <div className="  flex flex-col space-y-3  justify-center items-center lg:flex-row lg:justify-center lg:items-center lg:space-x-3">

        <div className="border border-slate-400 rounded-md max-w-xs w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-[420px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/images/btc.webp)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/images/btc.webp"
                className="h-10 w-10 rounded-full border-2 object-cover" />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  BitCoin BTC
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Today's Rate : {data?.rates?.BTC ?? "Loading..."}
              </h1>
               <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
               BTC rising fast! Stay updated with the latest rate.
              </p>
            </div>
          </div>
        </div>









        <div className="border border-slate-400 rounded-md max-w-xs w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-[420px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/images/eth.webp)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="60"
                width="60"
                alt="Avatar"
                src="/images/eth.webp"
                className="h-10 w-10 rounded-full border-2 object-cover" />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Ethereum ETH
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Today's Rate : {data?.rates?.ETH ?? "Loading..."}
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
             ETH hits new highs! Track the live rate now.

              </p>
            </div>
          </div>
        </div>















        <div className="border border-slate-400 rounded-md max-w-xs w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-[420px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/images/bnb.webp)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/images/bnb.webp"
                className="h-10 w-10 rounded-full border-2 object-cover" />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Binance
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Today's Rate :{data?.rates?.BNB ?? "Loading..."}
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              BNB making moves! Get the latest rate here.

              </p>
            </div>
          </div>
        </div>














        <div className="border border-slate-400 rounded-md max-w-xs w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-[420px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/images/sol.webp)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/images/sol.webp"
                className="h-10 w-10 rounded-full border-2 object-cover" />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Solana
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Today's Rate :  SOL:{data?.rates?.SOL ?? "Loading..."}
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
               SOL on the rise! Check out the live price update.






              </p>
            </div>
          </div>
        </div>



      </div></>
    // <div className="text-white">
    //   BTC: {data?.rates?.BTC ?? "Loading..."}
    //   <br />
    //   BNB: {data?.rates?.BNB ?? "Loading..."}
    //   <br />
    //   ETH: {data?.rates?.ETH ?? "Loading..."}
    //   <br />
    //   SOL: {data?.rates?.SOL ?? "Loading..."}
    // </div>
  );
}
