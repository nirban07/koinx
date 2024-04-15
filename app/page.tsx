"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Aside from '@/components/Aside';
import CoinDetails from '@/components/coinDetails';
import Navbar from '@/components/navbar';
import Tradingview from '@/components/tradingview';
import TrendingCoins from '@/components/trendingcoins';

export default function Home() {

  // console.log(data)
  return (
    <div className='bg-[#EFF2F5] h-screen  flex flex-col gap-4'>
      {/* nav */}
      <Navbar />

      <div className='flex gap-[9px] mx-6 md:mx-14'>
        <div className='text-sm font-normal'>
          Cryptocurrencies
        </div>
        <Image src="/icon-right.svg" alt="right" width={10} height={20} />
        <div className='text-sm font-medium'>
          Bitcoin
        </div>
      </div>

      {/* parent div covers two column */}
      <div className='flex gap-5 mx-[14px] md:mx-14'>
        {/* first column */}
        <CoinDetails />

        {/* blue box and trending coins column */}
        <Aside />
      </div>

    </div>
  );
}
