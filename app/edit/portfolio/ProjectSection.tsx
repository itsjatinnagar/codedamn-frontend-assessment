import ProjectCard from '@/components/ProjectCard';

const ProjectSection = () => {
	return (
		<div>
			<div className='mb-6 flex items-center justify-between'>
				<h3 className='font-bold text-2xl'>Projects</h3>
				<p className='cursor-pointer text-zinc-500'>See all</p>
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

export default ProjectSection;
