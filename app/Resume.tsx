import Button from '@/components/Button';
import Image from 'next/image';
import { ReactNode } from 'react';

const Resume = () => {
	return (
		<>
			<About />
			<WorkExperience />
			<Education />
			<Skills />
			<Interests />
			<Languages />
		</>
	);
};

export default Resume;

const About = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>About me</h2>
		<div className='flex flex-col items-start gap-y-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-100'>
			<p className='max-w-lg font-medium'>
				A self-driven, versatile, reliable, diligent individual who is calm and
				cheerful with a team-minded approach to work and getting things done.
			</p>
			<p className='max-w-lg font-medium'>
				A student who is passionate and with a keen eye for design ...
			</p>
			<Button className='btn-secondary'>Read more</Button>
		</div>
	</div>
);

const WorkExperience = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>Work experience</h2>
		<div className='flex flex-col gap-y-5'>
			<div className='flex items-start gap-x-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100'>
				<Image
					src='/images/Google.png'
					alt='codedamn profile google'
					width='40'
					height='40'
				/>
				<div className='w-full'>
					<h3 className='font-semibold text-xl'>
						Front-end developer at Google
					</h3>
					<div className='flex items-center justify-between'>
						<p className='divide-list'>
							<span>London</span>
							<span>Google Inc.</span>
						</p>
						<p className='font-semibold'>May 2021 - Present</p>
					</div>
					<p className='text-zinc-500 mt-6'>
						This role would be great for a web developer with 3+ years&lsquo;
						experience in designing and developing responsive websites. This
						position requires a profound understanding of the development
						process, using front-end technologies including HTML5, CSS3,
						JavaScript, jQuery, PHP/WordPress.
					</p>
				</div>
			</div>
			<div className='flex items-start gap-x-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100'>
				<Image
					src='/images/Facebook.png'
					alt='codedamn profile facebook'
					width='40'
					height='40'
				/>
				<div className='w-full'>
					<h3 className='font-semibold text-xl'>
						Junior Front-end Developer at Meta
					</h3>
					<div className='flex items-center justify-between'>
						<p className='divide-list'>
							<span>New York</span>
							<span>Meta Inc.</span>
						</p>
						<p className='font-semibold'>July 2020 - May 2021</p>
					</div>
					<p className='text-zinc-500 mt-6'>
						This role would be great for a web developer with 3+ years&lsquo;
						experience in designing and developing responsive websites.
					</p>
					<div className='mt-5'>
						<p className='font-semibold mb-2'>Job responsibilities:</p>
						<ul>
							<ListItem>
								Create an appealing design and turn it into a WordPress plugin
							</ListItem>
							<ListItem>Manage all technical aspects of the CMS</ListItem>
							<ListItem>Conducting website/application tests</ListItem>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const ListItem = ({ children }: { children: ReactNode }) => (
	<li className='flex items-center justify-start gap-x-2 text-zinc-500'>
		<Image
			src='/icons/bullet.svg'
			alt='codedamn list item'
			width='8'
			height='8'
		/>
		{children}
	</li>
);

const Education = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>Education</h2>
		<div className='flex flex-col gap-y-5'>
			<div className='flex items-start gap-x-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100'>
				<Image
					src='/images/harvard.png'
					alt='codedamn profile education'
					width='40'
					height='40'
				/>
				<div className='w-full'>
					<h3 className='font-semibold text-xl'>Harvard university</h3>
					<div className='flex items-center justify-between'>
						<p className='divide-list'>
							<span>Cambridge, GA</span>
							<span>Bachelor degree, Computer Science(Bsc) </span>
						</p>
						<p className='font-semibold'>May 2020 - Present</p>
					</div>
					<p className='text-zinc-500 mt-6'>
						Emory Admissions Fellow; assisted Dean of Admissions with student
						applications and Emory’s marketing strategy in the roll out of the
						university’s new website
					</p>
				</div>
			</div>
			<div className='flex items-start gap-x-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100'>
				<Image
					src='/images/harvard.png'
					alt='codedamn profile education'
					width='40'
					height='40'
				/>
				<div className='w-full'>
					<h3 className='font-semibold text-xl'>Mister Bim High School</h3>
					<div className='flex items-center justify-between'>
						<p className='divide-list'>
							<span>Atlanta, GA</span>
						</p>
						<p className='font-semibold'>September 2016 - 2020</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const Skills = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>Skills</h2>
		<div className='flex flex-wrap gap-5'>
			{[
				'HTML 5',
				'CSS 3',
				'Javascript',
				'React',
				'Next.js',
				'Mongo',
				'NodeJs',
				'Python',
				'Java',
			].map((item) => (
				<Chip key={item}>
					<Image
						src='/images/html5.svg'
						alt='codedamn profile skills'
						width='20'
						height='20'
					/>
					{item}
				</Chip>
			))}
		</div>
	</div>
);

const Interests = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>Interests</h2>
		<div className='flex flex-wrap gap-5'>
			{[
				'Semantics',
				'TED Talks',
				'Udemy',
				'Behavioral',
				'Economics',
				'Hiking',
			].map((item) => (
				<Chip key={item}>{item}</Chip>
			))}
		</div>
	</div>
);

const Languages = () => (
	<div>
		<h2 className='font-bold text-2xl text-center mb-6'>Languages</h2>
		<div className='flex flex-wrap gap-5'>
			{['English', 'Mandarin', 'Cantonese Chinese'].map((item) => (
				<Chip key={item}>
					<Image
						src='/images/Flag.png'
						alt='codedamn profile languages'
						width='20'
						height='14'
					/>
					{item}
				</Chip>
			))}
		</div>
	</div>
);

const Chip = ({ children }: { children: ReactNode }) => (
	<div className='rounded-md py-2 pl-2 pr-3 bg-zinc-50 border border-zinc-100 flex gap-x-2'>
		{children}
	</div>
);
