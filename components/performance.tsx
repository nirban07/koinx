import React from 'react';

const Performance = () => {
	return (
		<div className='bg-white p-6 flex flex-col gap-5' >
			<div className=' font-semibold text-2xl/[28.8px]' >Performance</div>
			<div className='space-y-[15px]'>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-[10px] w-[116px]'>
						<p className='font-normal text-[#44475B] text-[14px]'>
							Today&apos;s Low
						</p>
						<p className='font-medium text-[#44475B]'>
							46,930.22
						</p>
					</div>
					<div className="w-3/5">
						<input type="range" min="1" max="100" value="70" className="slider" id="myRange" />
					</div>
					<div className='flex flex-col gap-[10px] w-[116px]'>
						<p className='font-normal text-[#44475B] text-[14px]'>
							Today&apos;s High
						</p>
						<p className='font-medium text-[#44475B]'>
							46,930.22
						</p>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-[10px] w-[116px]'>
						<p className='font-normal text-[#44475B] text-[14px]'>
							Today&apos;s Low
						</p>
						<p className='font-medium text-[#44475B]'>
							46,930.22
						</p>
					</div>
					<div className="w-3/5">
						<input type="range" min="1" max="100" value="70" className="slider" id="myRange" />
					</div>
					<div className='flex flex-col gap-[10px] w-[116px]'>
						<p className='font-normal text-[#44475B] text-[14px]'>
							Today&apos;s High
						</p>
						<p className='font-medium text-[#44475B]'>
							46,930.22
						</p>
					</div>
				</div>
			</div>

			<div>
				<p className='font-semibold text-lg/[20px] text-[#44475B]'>Fundamentals</p>
			</div>
		</div>
	)
}

export default Performance