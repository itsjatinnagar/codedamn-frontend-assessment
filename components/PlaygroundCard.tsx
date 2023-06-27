import Image from 'next/image';
import { MouseEventHandler } from 'react';
import OverlappingImage from './OverlappingImage';

const PlaygroundCard = ({
	isActive,
	onClickHandler,
}: {
	isActive: boolean;
	onClickHandler: MouseEventHandler;
}) => {
	return (
		<div
			className={
				isActive
					? 'p-4 rounded-md bg-indigo-50 border-2 border-indigo-600'
					: 'p-4 rounded-md bg-zinc-50 border border-zinc-100'
			}
		>
			<div className='relative flex items-start gap-x-3'>
				<Image
					src='/images/html5.svg'
					alt='codedamn html5'
					width='40'
					height='40'
				/>
				<div className='flex flex-col gap-y-2'>
					<div>
						<p className='font-semibold text-lg'>Playground title</p>
						<p className='text-sm text-zinc-500 divide-list'>
							<span>HTML/CSS</span>
							<span>1 min ago</span>
						</p>
					</div>
					<div className='flex items-center justify-start gap-x-2'>
						<OverlappingImage />
						<p className='text-xs text-zinc-500'>
							Shared with <span className='font-bold'>Adam, Anna</span>.. +7
							more
						</p>
					</div>
				</div>

				<div
					className={
						isActive
							? 'absolute top-0 right-0 w-fit cursor-pointer'
							: 'absolute top-0 right-0 w-fit cursor-pointer'
					}
					onClick={onClickHandler}
				>
					<input
						type='checkbox'
						className='sr-only'
						checked={isActive}
						readOnly
					/>
					<div
						className={
							isActive
								? 'bg-indigo-600 block h-4 w-4 rounded-full'
								: 'bg-zinc-200 block h-4 w-4 rounded-full'
						}
					></div>
					{isActive && (
						<div className='absolute h-[6px] w-[6px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition'></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PlaygroundCard;
