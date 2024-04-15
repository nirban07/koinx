"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Tradingview from './tradingview';

type TData = {
	"bitcoin": {
		"inr": number,
		"inr_24h_change": number,
		"usd": number,
		"usd_24h_change": number
	}
}

const CoinDetails = () => {
	const [data, setdata] = useState<TData>();
	const [count, setcount] = useState(0)
	// console.log(data)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true")
				const result = await response.json()
				// console.log(data)
				console.log(typeof result.bitcoin.usd_24h_change)
				setcount(count + 1)
				setdata(result)
				return data
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
		console.log(count)
	}, [])
	return (
		<div className='space-y-10 bg-white p-6 rounded-lg  w-[768px] md:min-w-[881px] '>
			<div className='flex gap-9'>
				<div className='flex items-center gap-2'>
					<div className=' w-8 md:w-full'>
						<Image src="/bitcoin.svg" alt="bitcoin" width="36" height="36" />
					</div>
					<p className='font-semibold text-[21px]/[28.8px] md:text-2xl/[28.8px] my-auto'>
						Bitcoin
						<span className=' font-normal text-sm md:text-base pl-2 text-[#5D667B]'>
							BTC
						</span>
					</p>
				</div>
				<button className='font-medium text-base text-white bg-[#808A9D] rounded-lg p-[10px]'>
					Rank #1
				</button>
			</div>
			{/* outer frame */}
			<div>
				<div className='space-y-6'>
					{/* numbers div */}
					<div className='flex gap-8 items-start'>
						<div>
							<div className=' font-semibold text-[28px]/[38.4px]'>
								$ {data?.bitcoin.usd.toLocaleString()}
							</div>
							<div className='font-medium text-base/[27px]'>
								₹ {data?.bitcoin.inr.toLocaleString("en-IN")}
							</div>
						</div>


						<div className='flex gap-3 items-center'>
							<div className='flex gap-2 p-2 text-base font-medium text-[#14B079] bg-[#EBF9F4]'>
								<Image src="/triangle.svg" alt="trading high" width={11} height={8} />
								{data?.bitcoin.usd_24h_change.toFixed(2)}
							</div>
							<div className='text-sm/[27px] text-[#768396] font-medium'>
								(24H)
							</div>
						</div>

					</div>
					{/* separating line  */}
					<hr className='border border-[#DEE1E6]' />
					{/* chart div */}
					<div className=''>
						{/* name and hour div */}
						<div className=' md:flex justify-between mb-10'>
							<div className=' font-semibold text-sm md:text-base/[19.5px]'>
								Bitcoin Price Chart (USD)
							</div>
							<div className='space-x-5 font-medium text-[9.34px]/[8px] md:text-[13px]/[19.5px] text-[#5D667B]'>
								<span>1H</span>
								<span>24H</span>
								<span className='bg-[#E2ECFE] text-[#0141CF] px-2 rounded-[32px]'>7D</span>
								<span>1M</span>
								<span>3M</span>
								<span>6M</span>
								<span>1Y</span>
							</div>
						</div>

						{/* trading view */}
						<div className='h-[400px]'>
							<Tradingview />
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default CoinDetails	