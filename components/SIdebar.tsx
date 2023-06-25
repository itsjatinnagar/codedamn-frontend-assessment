import Link from 'next/link';

const ITEMS = [
	{
		id: '0',
		name: 'Profile',
		slug: '/edit-profile',
	},
	{
		id: '1',
		name: 'Socials',
		slug: '/edit-socials',
	},
	{
		id: '2',
		name: 'Portfolio',
		slug: '/edit-portfolio',
	},
	{
		id: '3',
		name: 'Resume',
		slug: '/edit-profile',
	},
];

const Sidebar = () => {
	return (
		<aside className='relative w-64 bg-zinc-50 border-zinc-100 rounded-2xl p-6 overflow-hidden'>
			<div className='flex gap-y-3 flex-col'>
				{ITEMS.map((item) => (
					<Link key={item.id} href={item.slug}>
						<div className='flex items-center gap-x-2 h-12'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								className='text-zinc-400'
								stroke='currentColor'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667C5.4 1.66667 1.66666 5.4 1.66666 10C1.66666 14.6 5.4 18.3333 10 18.3333Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M10 13.3333C11.8417 13.3333 13.3333 11.8417 13.3333 10C13.3333 8.15833 11.8417 6.66667 10 6.66667C8.15833 6.66667 6.66666 8.15833 6.66666 10C6.66666 11.8417 8.15833 13.3333 10 13.3333Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M17.6417 6.66667C15.125 6.11667 12.5167 6.11667 10 6.66667'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M3.29166 5.05L3.30833 5.1C4.15 7.50833 5.44166 9.74167 7.11666 11.6667'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M9.06667 18.2833C10.7833 16.3917 12.075 14.1583 12.8583 11.7333L12.8833 11.6667'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<p className='font-semibold text-base text-zinc-400'>
								{item.name}
							</p>
						</div>
					</Link>
				))}
			</div>
			<div className='absolute -left-[5px] top-[30px] h-[35px] w-[10px] bg-zinc-900 rounded-md'></div>
		</aside>
	);
};

export default Sidebar;
