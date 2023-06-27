import FormField from '@/components/FormField';

const InterestSection = () => {
	return (
		<div>
			<h3 className='font-bold text-2xl mb-6'>Interests</h3>
			<FormField htmlFor='interests' label='Interests'>
				<input
					type='text'
					name='interests'
					id='interests'
					placeholder='Music, Football, Programming'
				/>
			</FormField>
		</div>
	);
};

export default InterestSection;
