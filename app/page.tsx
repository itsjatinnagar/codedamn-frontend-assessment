'use client';

import Button from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';

import Image from 'next/image';
import Portfolio from './Portfolio';
import { useState } from 'react';
import Resume from './Resume';

const HomePage = () => {
	const [state, setState] = useState('/portfolio');

	const handleChange = (slug: string) => setState(slug);
	return (
		<main className='mx-auto mt-16 mb-10 flex flex-col gap-y-10 max-w-3xl w-full'>
			<Profile />
			<Tabs activeSlug={state} onChangeHandler={handleChange} />
			{state === '/portfolio' ? <Portfolio /> : <Resume />}
		</main>
	);
};

export default HomePage;

const Profile = () => {
	return (
		<div className='rounded-2xl pb-4 border border-zinc-200'>
			<div className='relative'>
				<Image
					src='/images/profile_background.png'
					alt='codedamn profile cover'
					width='738'
					height='180'
					className='w-full h-[180px]'
				/>
				<button className='absolute top-3 right-3 btn-transparent flex items-center gap-x-1'>
					<Image
						src='/icons/edit.svg'
						alt='codedamn profile edit'
						width='16'
						height='16'
					/>
					<span className='font-semibold text-sm text-white'>Edit Cover</span>
				</button>
				<div className='absolute -bottom-[70px] left-4'>
					<Image
						src='/images/profile_pic.png'
						alt='codedamn profile'
						width='140'
						height='140'
						className='border-2 border-zinc-100 rounded-full'
					/>
					<div className='absolute bottom-1 right-1'>
						<Image
							src='/images/polygon.svg'
							alt='codedamn polygon'
							width='31'
							height='33'
						/>
						<span className='absolute top-0 left-1/3 font-bold text-xl text-white'>
							5
						</span>
					</div>
				</div>
			</div>
			<div className='pl-44 pt-6 pr-6 flex flex-col gap-y-8'>
				<div>
					<div className='flex items-center gap-x-3'>
						<h2 className='font-bold text-3xl'>Anna Cheng</h2>
						<div className='px-3 py-[2px] bg-lime-300 rounded'>
							<span className='font-semibold text-xs'>Pro</span>
						</div>
						<div className='px-3 py-[2px] bg-sky-200 rounded'>
							<span className='font-semibold text-xs text-sky-900'>
								Looking for job
							</span>
						</div>
					</div>
					<p className='my-2'>
						Full stack dev at codedamn | Harvard&rsquo;22&rdquo;
					</p>
					<p className='flex items-center gap-x-1'>
						<Image
							src='/icons/location.svg'
							alt='codedamn user location'
							width='16'
							height='16'
						/>
						Mumbai, India
					</p>
				</div>
				<div className='flex flex-wrap gap-3'>
					{[
						'HTML 5',
						'CSS 3',
						'Javascript',
						'React',
						'Next',
						'Python',
						'C++',
						'Mongo',
						'NodeJs',
					].map((item) => (
						<div key={item} className='py-2 px-3 rounded-md bg-zinc-100'>
							<span className='font-semibold text-xs'>{item}</span>
						</div>
					))}
				</div>
				<hr />
				<div className='flex items-center justify-between'>
					<ButtonRow>
						<button className='rounded-md p-2 border border-zinc-200'>
							<Image
								src='/images/Google.png'
								alt='codedamn profile google'
								width='20'
								height='20'
							/>
						</button>
						<button className='rounded-md p-2 border border-zinc-200'>
							<Image
								src='/images/Instagram.png'
								alt='codedamn profile instagram'
								width='20'
								height='20'
							/>
						</button>
						<button className='rounded-md p-2 border border-zinc-200'>
							<Image
								src='/images/Facebook.png'
								alt='codedamn profile facebook'
								width='20'
								height='20'
							/>
						</button>
						<button className='rounded-md p-2 border border-zinc-200'>
							<Image
								src='/images/LinkedIn.png'
								alt='codedamn profile linkedin'
								width='20'
								height='20'
							/>
						</button>
						<button className='rounded-md p-2 border border-zinc-200'>
							<Image
								src='/images/YouTube.png'
								alt='codedamn profile youtube'
								width='20'
								height='20'
							/>
						</button>
					</ButtonRow>
					<ButtonRow>
						<button className='bg-zinc-100 rounded-md p-3'>
							<Image
								src='/icons/save.svg'
								alt='codedamn profile save'
								width='16'
								height='16'
							/>
						</button>
						<Button className='btn-primary'>Contact</Button>
					</ButtonRow>
				</div>
			</div>
		</div>
	);
};

const Tabs = ({
	activeSlug,
	onChangeHandler,
}: {
	activeSlug: string;
	onChangeHandler: Function;
}) => {
	const ITEMS = [
		{ title: 'Portfolio', slug: '/portfolio' },
		{
			title: 'Resume',
			slug: '/resume',
		},
	];

	return (
		<div className='rounded-xl flex items-center gap-x-6 px-6 py-2 border border-zinc-200'>
			{ITEMS.map((item) => (
				<div
					key={item.slug}
					className={
						activeSlug === item.slug
							? 'text-indigo-700 rounded-md px-3 py-2 bg-indigo-50 cursor-pointer'
							: 'text-zinc-700 rounded-md px-3 py-2 hover:bg-zinc-100 cursor-pointer'
					}
					onClick={() => onChangeHandler(item.slug)}
				>
					<span className='font-medium text-sm'>{item.title}</span>
				</div>
			))}
		</div>
	);
};
