import FormField from '@/components/FormField';

const ExperienceSection = () => {
	return (
		<div>
			<h3 className='font-bold text-2xl mb-6'>Work experience</h3>
			<div className='flex flex-col gap-y-6'>
				<FormField htmlFor='position' label='Position'>
					<input
						type='text'
						name='position'
						id='position'
						placeholder='Full-stack Developer Engineer'
					/>
				</FormField>
				<FormField htmlFor='location' label='Location'>
					<input
						type='text'
						name='location'
						id='location'
						placeholder='Floor 12, Building No. 1A, St. 32, Bangalore'
					/>
				</FormField>
				<FormField htmlFor='company' label='Company'>
					<input
						type='text'
						name='company'
						id='company'
						placeholder='Codedamn'
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

export default ExperienceSection;
