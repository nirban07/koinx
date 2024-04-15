import { fail } from 'assert';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CoinInfo {
	item: {
		name: string;
		symbol: string;
		thumb: string;
		sparkline: string;
		data: {
			price_change_percentage_24h: Record<string, number>;
		}

	}
}

const TrendingCoins = () => {
	const [coins, setcoins] = useState<CoinInfo[]>()
	useEffect(() => {
		const fetchTrending = async () => {
			const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
			const result = await response.json()
			let final = result.coins.slice(0, 3)
			console.log(typeof final)
			setcoins(final)
		}
		fetchTrending()
	}, [])
	console.log(coins)
	return (
		<div className='bg-white flex flex-col'>
			<p className='font-semibold text-2xl/[28.8px] mx-6 mt-6'>Trending Coins (24h)</p>
			<div className='m-6 flex gap-5 flex-col '>
				{coins?.map((item) =>
					<div key={item.item.name} className='flex gap-5 items-center justify-between'>
						<div className='flex gap-[6px]'>
							<Image src={item.item.thumb} alt="icon" width={20} height={20} />
							<p className='text-base font-medium'>{item.item.name} ({item.item.symbol})</p>
						</div>
						<div className='flex gap-2 p-2 text-base font-medium text-[#14B079] bg-[#EBF9F4]'>
							<Image src="/triangle.svg" alt="trading high" width={11} height={8} />
							{item.item.data.price_change_percentage_24h.usd.toFixed(2)} %
						</div>
					</div>
				)}
			</div>

		</div>
	)
}

export default TrendingCoins