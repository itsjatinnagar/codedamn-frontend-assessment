import Image from 'next/image';
import FormField from './FormField';

const PrimaryButton = ({ label }: { label: string }) => {
	return (
		<button className='bg-indigo-600 text-white rounded-md px-4 py-2'>
			<span className='font-semibold text-sm'>{label}</span>
		</button>
	);
};
const SecondaryButton = ({ label }: { label: string }) => {
	return (
		<button className='bg-zinc-100 rounded-md px-4 py-2 ml-3'>
			<span className='font-semibold text-sm'>{label}</span>
		</button>
	);
};

const Toggle = () => {
	return (
		<div className='relative w-fit'>
			<input type='checkbox' className='sr-only' />
			<div className='bg-zinc-200 block h-6 w-11 rounded-full'></div>
			<div className='absolute flex h-5 w-5 items-center justify-center rounded-full bg-white transition toggle-circle'></div>
		</div>
	);
};

const Avatar = () => {
	return (
		<div className='flex items-center gap-x-6'>
			<Image
				src='/images/profile_pic.png'
				alt='codedamn user profile'
				width='72'
				height='72'
			/>
			<div>
				<PrimaryButton label='Upload new picture' />
				<SecondaryButton label='Delete' />
			</div>
		</div>
	);
};

const Form = () => {
	return (
		<form className='flex flex-col gap-y-6'>
			<FormField
				label='Display name'
				helperText='Name entered above will be used for all issued certificates'
			>
				<input type='text' />
			</FormField>
			<FormField label='About'>
				<input type='text' />
			</FormField>
			<FormField label='Profession'>
				<input type='text' />
			</FormField>
			<FormField label='Date of birth'>
				<input type='date' placeholder='DD/MM/YYYY' />
			</FormField>
			<FormField label='Gender'>
				<input type='text' />
			</FormField>
		</form>
	);
};

const Visibility = () => {
	return (
		<div>
			<h2 className='font-bold text-xl'>Section Visibility</h2>
			<p className='text-zinc-500'>
				Select which sections and content should show on your profile page.
			</p>
			<div className='mt-6 bg-zinc-50 p-6 flex flex-col gap-y-4 rounded-2xl'>
				<div className='flex items-center justify-between'>
					<div>
						<p className='font-bold'>Followers and following</p>
						<p className='text-zinc-500'>
							Shows your followers and the users you follow on codedamn
						</p>
					</div>
					<Toggle />
				</div>
				<div className='flex items-center justify-between'>
					<div>
						<p className='font-bold'>XP</p>
						<p className='text-zinc-500'>Shows the XP you have earned</p>
					</div>
					<Toggle />
				</div>
				<div className='flex items-center justify-between'>
					<div>
						<p className='font-bold'>Achievement badges</p>
						<p className='text-zinc-500'>
							Shows your relative percentile and proficiency
						</p>
					</div>
					<Toggle />
				</div>
			</div>
		</div>
	);
};

const ProfileForm = () => {
	return (
		<main className='flex flex-col gap-y-10 max-w-2xl w-full'>
			<Avatar />
			<Form />
			<Visibility />
			<div className='flex items-center justify-end gap-x-3'>
				<SecondaryButton label='Cancel' />
				<PrimaryButton label='Save changes' />
			</div>
		</main>
	);
};

export default ProfileForm;
