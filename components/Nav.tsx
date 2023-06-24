import Image from 'next/image';

const SearchBar = () => {
	return (
		<div className='flex items-center border border-zinc-100 rounded-lg pr-2'>
			<div className='flex items-center gap-x-2 px-[13px] py-[9px]'>
				<Image
					src='/icons/search.svg'
					alt='codedamn search'
					width='20'
					height='20'
				/>
				<input type='text' name='search' id='search' placeholder='Search' />
			</div>
			<div className=''>
				<div className='flex items-center gap-x-1 rounded-md px-[8px] py-[4px] bg-zinc-100'>
					<p className='font-inter text-sm text-zinc-500'>Courses</p>
					<Image
						src='/icons/arrow.svg'
						alt='codedamn arrow down'
						width='14'
						height='14'
					/>
				</div>
			</div>
		</div>
	);
};

const Profile = () => {
	return (
		<div className='relative'>
			<Image
				src='/images/profile_pic.png'
				alt='codedamn profile'
				width='42'
				height='42'
			/>
			<div className='absolute -top-1 -right-1'>
				<Image
					src='/images/polygon.svg'
					alt='codedamn polygon'
					width='20'
					height='21'
				/>
				<span className='absolute top-0 left-1/3 font-inter font-bold text-sm text-white'>
					5
				</span>
			</div>
		</div>
	);
};

const Rewards = () => {
	return (
		<div className='flex items-center gap-x-1'>
			<Image
				src='/images/lightning.svg'
				alt='codedamn lightning'
				width='24'
				height='24'
			/>
			<p className='font-inter font-extrabold text-base text-zinc-500'>2</p>
		</div>
	);
};

const Notification = () => {
	return (
		<div className='relative '>
			<Image src='/icons/bell.svg' alt='codedamn bell' width='24' height='24' />
			<div className='absolute -top-1 -right-1 bg-pink-500 h-4 w-4 rounded-full text-center'>
				<span className='font-inter font-bold text-xs text-white align-top'>
					1
				</span>
			</div>
		</div>
	);
};

const Nav = () => {
	return (
		<div className='container mx-auto py-2 flex items-center justify-between'>
			<h1 className='font-inter font-bold text-2xl text-zinc-900'>codedamn</h1>
			<div className='flex items-center gap-x-6'>
				<SearchBar />
				<div className='flex items-center gap-x-6'>
					<div className='flex items-center gap-x-4'>
						<Rewards />
						<Notification />
					</div>
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default Nav;
