import { Metadata } from 'next';
import Avatar from '@/components/Avatar';
import ButtonRow from '@/components/ButtonRow';
import Button from '@/components/Button';
import ProfileFormSection from './ProfileFormSection';
import VisibilitySection from './VisibilitySection';

export const metadata: Metadata = {
	title: 'Codedamn - Edit Profile',
};

const EditProfilePage = () => {
	return (
		<main className='flex flex-col gap-y-10 max-w-2xl w-full'>
			<div className='flex items-center gap-x-6'>
				<Avatar
					src='/images/profile_pic.png'
					alt='codedamn user profile'
					size='72'
				/>
				<ButtonRow>
					<Button className='btn-primary'>Upload new picture</Button>
					<Button className='btn-secondary'>Delete</Button>
				</ButtonRow>
			</div>
			<ProfileFormSection />
			<VisibilitySection />
			<ButtonRow>
				<Button className='btn-secondary'>Cancel</Button>
				<Button className='btn-primary'>Save changes</Button>
			</ButtonRow>
		</main>
	);
};

export default EditProfilePage;
