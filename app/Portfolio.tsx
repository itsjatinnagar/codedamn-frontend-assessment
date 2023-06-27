import CertificateCard from '@/components/CertificateCard';
import CupIcon from '@/components/CupIcon';
import HeartIcon from '@/components/HeartIcon';
import LightningIcon from '@/components/LightningIcon';
import PlaygroundCard from '@/components/PlaygroundCard';
import StarIcon from '@/components/StarIcon';
import Image from 'next/image';

const Portfolio = () => {
	return (
		<>
			<Stats />
			<Projects />
			<Playgrounds />
			<Certificates />
		</>
	);
};

export default Portfolio;

const Stats = () => {
	return (
		<div>
			<h2 className='font-bold text-2xl'>Stats</h2>
			<div className='mt-6 grid grid-cols-2 gap-5'>
				<div className='rounded-xl flex items-center gap-x-4 px-5 py-3 bg-zinc-50 border border-zinc-100'>
					<LightningIcon />
					<div>
						<p className='font-bold text-xl'>2</p>
						<p className='text-base text-zinc-500'>Longest streak</p>
					</div>
				</div>
				<div className='rounded-xl flex items-center gap-x-4 px-5 py-3 bg-zinc-50 border border-zinc-100'>
					<StarIcon />
					<div>
						<p className='font-bold text-xl'>1200</p>
						<p className='text-base text-zinc-500'>Experience points</p>
					</div>
				</div>
				<div className='rounded-xl flex items-center gap-x-4 px-5 py-3 bg-zinc-50 border border-zinc-100'>
					<CupIcon />
					<div>
						<p className='font-bold text-xl'>Novice</p>
						<p className='text-base text-zinc-500'>Current league</p>
					</div>
				</div>
				<div className='rounded-xl flex items-center gap-x-4 px-5 py-3 bg-zinc-50 border border-zinc-100'>
					<HeartIcon />
					<div>
						<p className='font-bold text-xl'>120</p>
						<p className='text-base text-zinc-500'>Karma points</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<div className='mb-6 flex items-center justify-between'>
				<h2 className='font-bold text-2xl'>Projects</h2>
				<button>
					<span className='font-semibold text-indigo-600'>
						Create new project
					</span>
				</button>
			</div>
			<div className='grid grid-cols-2 gap-5'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

const Playgrounds = () => {
	return (
		<div>
			<div className='mb-6 flex items-center justify-between'>
				<h2 className='font-bold text-2xl'>Playgrounds</h2>
				<button>
					<span className='font-semibold text-indigo-600'>
						Create new playground
					</span>
				</button>
			</div>
			<div className='grid grid-cols-2 gap-5'>
				<PlaygroundCard />
				<PlaygroundCard />
				<PlaygroundCard />
				<PlaygroundCard />
			</div>
		</div>
	);
};

const Certificates = () => {
	return (
		<div>
			<div className='mb-6 flex items-center justify-between'>
				<h2 className='font-bold text-2xl'>Certificates</h2>
				<button>
					<span className='font-semibold text-indigo-600'>
						Add new certificate
					</span>
				</button>
			</div>
			<div className='grid grid-cols-2 gap-5'>
				<CertificateCard />
				<CertificateCard />
				<CertificateCard />
				<CertificateCard />
			</div>
		</div>
	);
};

const ProjectCard = () => (
	<div className='p-4 bg-zinc-50 border border-zinc-100 rounded-md'>
		<div className='mb-5'>
			<Image
				src='/images/project_preview.png'
				alt='codedamn project preview'
				width='272'
				height='170'
				className='w-full h-auto'
			/>
		</div>
		<div>
			<p className='font-semibold'>Personal Portfolio Website</p>
			<p className='text-sm text-zinc-500 divide-list flex'>
				<span className='flex gap-x-1'>
					<Image
						src='/images/html5.svg'
						alt='codedamn project html5'
						width='20'
						height='20'
					/>
					HTML/CSS
				</span>
				<span className='flex gap-x-1'>
					<Image
						src='/images/html5.svg'
						alt='codedamn project html5'
						width='20'
						height='20'
					/>
					React
				</span>
			</p>
		</div>
	</div>
);
