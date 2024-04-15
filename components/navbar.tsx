import Image from 'next/image';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex px-6 md:px-14 min-h-16 md:min-h-20 justify-between bg-white'>
			<div className=' w-[81px] md:w-full my-auto'>
				<Image
					src="/koinlogo.svg"
					alt="koinx Logo"
					width={96}
					height={24}
				/>
			</div>

			<div className='hidden md:flex w-[909px] text-base font-semibold gap-4 justify-end items-center'>
				<div>
					Crypto Taxes
				</div>
				<div>
					Free Tools
				</div>
				<div>
					Resource Center
				</div>
				<div>
					<button className='text-white w-[136px] p-2 rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]'>Get started</button>
				</div>
			</div>

			<div className=' my-auto md:hidden'>
				<Image src="/menu.svg" alt="menu option" width={27} height={27} />
			</div>
		</div>
	)
}

export default Navbar