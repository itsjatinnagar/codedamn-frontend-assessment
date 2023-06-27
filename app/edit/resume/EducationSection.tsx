import FormField from '@/components/FormField';

const EducationSection = () => {
	return (
		<div>
			<h3 className='font-bold text-2xl mb-6'>Education</h3>
			<div className='flex flex-col gap-y-6'>
				<FormField htmlFor='college' label='College'>
					<input
						type='text'
						name='college'
						id='college'
						placeholder='IIT Bombay'
					/>
				</FormField>
				<FormField htmlFor='location' label='Location'>
					<input
						type='text'
						name='location'
						id='location'
						placeholder='Bombay, India'
					/>
				</FormField>
				<FormField htmlFor='course' label='Course'>
					<input
						type='text'
						name='course'
						id='course'
						placeholder='B.Tech CSE'
					/>
				</FormField>
				<div className='flex items-center gap-x-4'>
					<div className='w-full'>
						<FormField htmlFor='from' label='From'>
							<input
								type='date'
								placeholder='DD/MM/YYYY'
								name='from'
								id='from'
							/>
						</FormField>
					</div>
					<div className='w-full'>
						<FormField htmlFor='to' label='To'>
							<input type='date' placeholder='DD/MM/YYYY' name='to' id='to' />
						</FormField>
					</div>
				</div>
				<FormField htmlFor='description' label='Description'>
					<textarea
						name='description'
						id='description'
						className='h-10 resize-none'
					></textarea>
				</FormField>
			</div>
		</div>
	);
};

export default EducationSection;
