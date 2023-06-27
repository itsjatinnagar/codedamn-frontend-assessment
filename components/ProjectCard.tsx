import Image from 'next/image';
import OverlappingImage from './OverlappingImage';

const ProjectCard = () => {
	return (
		<div className='p-4 bg-zinc-50 border border-zinc-100 rounded-md'>
			<div className='relative mb-5'>
				<Image
					src='/images/project_preview.png'
					alt='codedamn project preview'
					width='272'
					height='170'
					className='w-full h-auto'
				/>
				<div className='absolute bottom-2 left-2 flex gap-x-3'>
					<div className='px-3 py-[2px] bg-sky-200 rounded'>
						<span className='font-medium text-xs text-sky-900'>Badge</span>
					</div>
					<div className='px-3 py-[2px] bg-sky-200 rounded'>
						<span className='font-medium text-xs text-sky-900'>Badge</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-3'>
				<div className='relative'>
					<p className='font-semibold'>Personal Portfolio Website</p>
					<p className='text-sm text-zinc-500 divide-list'>
						<span>HTML/CSS</span>
						<span>Javascript</span>
						<span>1 min ago</span>
					</p>
					<Image
						src='/icons/menu_vertical.svg'
						alt='codedamn project menu'
						width='20'
						height='20'
						className='absolute top-0 right-0 cursor-pointer'
					/>
				</div>
				<div className='flex items-center justify-start gap-x-2'>
					<OverlappingImage />
					<p className='text-xs text-zinc-500'>3 contributors</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
