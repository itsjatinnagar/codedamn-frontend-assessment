import { Metadata } from 'next';
import Button from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import SocialFormSection from './FormSection';

export const metadata: Metadata = {
	title: 'Codedamn - Edit Socials',
};

const EditSocialsPage = () => {
	return (
		<main className='flex flex-col gap-y-10 max-w-2xl w-full'>
			<SocialFormSection />
			<ButtonRow>
				<Button className='btn-secondary'>Cancel</Button>
				<Button className='btn-primary'>Save Changes</Button>
			</ButtonRow>
		</main>
	);
};

export default EditSocialsPage;
