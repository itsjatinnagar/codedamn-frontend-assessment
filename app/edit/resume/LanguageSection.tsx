import FormField from '@/components/FormField';

const LanguageSection = () => {
	return (
		<div>
			<h3 className='font-bold text-2xl mb-6'>Langauges</h3>
			<FormField htmlFor='languages' label='Languages'>
				<input
					type='text'
					name='languages'
					id='languages'
					placeholder='English, Hindi, Spanish'
				/>
			</FormField>
		</div>
	);
};

export default LanguageSection;
