import React from 'react';

const navoptions = [
	{
		"name": "Overview",
		"class": "text-[#0141CF] font-semibold border-b-[3px] border-[#0141CF]"
	},
	{
		"name": "Fundamentals"
	},
	{
		"name": "News Insights"
	},
	{
		"name": "Sentiments"
	},
	{
		"name": "Team"
	},
	{
		"name": "Technicals"
	},
	{
		"name": "Tokenomics"
	}
]

const Options = () => {
	return (
		<div className='flex gap-8 font-medium text-[#3E424A] text-base tracking-tighter border-[#D3E0E6] border-b overflow-scroll scroll-smooth no-scrollbar'>
			{navoptions.map((item, key) => (
				<div key={key} className={`${item.class ? item.class : ""} py-3 shrink-0`}>{item.name}</div>
			))}

		</div>
	)
}

export default Options