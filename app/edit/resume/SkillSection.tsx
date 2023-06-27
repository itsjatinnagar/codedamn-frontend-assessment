import FormField from '@/components/FormField';

const SkillSection = () => {
	return (
		<div>
			<h3 className='font-bold text-2xl mb-6'>Tech skills</h3>
			<FormField htmlFor='skill' label='Skill'>
				<input
					type='text'
					name='skill'
					id='skill'
					placeholder='HTML, CSS, Javascript'
				/>
			</FormField>
		</div>
	);
};

export default SkillSection;
