import { Metadata } from 'next';
import Button from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import PlaygroundSection from './PlaygroundSection';
import ProjectSection from './ProjectSection';

export const metadata: Metadata = {
	title: 'Codedamn - Edit Portfolio',
};

const EditPortfolioPage = () => {
	return (
		<main className='flex flex-col gap-y-10 max-w-2xl w-full'>
			<PlaygroundSection />
			<ProjectSection />
			<ButtonRow>
				<Button className='btn-secondary'>Cancel</Button>
				<Button className='btn-primary'>Save Changes</Button>
			</ButtonRow>
		</main>
	);
};

export default EditPortfolioPage;
