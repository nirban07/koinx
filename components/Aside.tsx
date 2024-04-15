import Image from 'next/image';
import React from 'react';

import TrendingCoins from './trendingcoins';

const Aside = () => {
	return (
		<div className=' hidden md:flex flex-col gap-5'>
			{/* blue box */}
			<div className='bg-[#0052FE]  px-[16px] py-[31px] flex flex-col items-center min-w-[426px] rounded-lg'>
				{/* text */}
				<div>
					<p className='font-bold text-2xl/[40px] w-[268px] text-center text-white mb-[14px] mx-auto'>
						Get Started with KoinX for FREE
					</p>
					<p className='font-medium text-white text-sm/[24px] text-center w-[324px] mb-5'>
						With our range of features that you can equip for free,
						KoinX allows you to be more educated and aware of your tax reports.
					</p>
				</div>

				{/* image */}
				<Image src="/illustration.png" alt="illustration" width={178.66} height={166.22} className='my-[19px]' />

				<div className='flex gap-2 justify-center w-[273px] px-6 py-2 mb-5 bg-white font-semibold text-base/[28px] text-[#0F1629] rounded-lg'>
					<button>Get Started for FREE</button>
					<Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} />
				</div>
			</div>

			{/* trending coins */}
			<TrendingCoins />
		</div>
	)
}

export default Aside