'use client';

import { ChangeEvent, useState } from 'react';
import FormField from '@/components/FormField';

const SocialFormSection = () => {
	const [state, setState] = useState({
		github: 'github.com/profile',
		linkedin: '',
		facebook: '',
		instagram: '',
		dribbble: '',
		behance: '',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;

		setState({ ...state, [name]: value });
	};

	return (
		<form className='flex flex-col gap-y-6'>
			<FormField htmlFor='github' label='GitHub'>
				<input
					placeholder='GitHub profile URL'
					type='text'
					name='github'
					id='github'
					value={state.github}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='linkedin' label='Linkedin'>
				<input
					placeholder='Linkedin profile URL'
					type='text'
					name='linkedin'
					id='linkedin'
					value={state.linkedin}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='facebook' label='Facebook'>
				<input
					placeholder='Facebook profile URL'
					type='text'
					name='facebook'
					id='facebook'
					value={state.facebook}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='instagram' label='Instagram'>
				<input
					placeholder='Instagram profile URL'
					type='text'
					name='instagram'
					id='instagram'
					value={state.instagram}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='dribbble' label='Dribbble'>
				<input
					placeholder='Dribbble profile URL'
					type='text'
					name='dribbble'
					id='dribbble'
					value={state.dribbble}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='behance' label='Behance'>
				<input
					placeholder='Behance profile URL'
					type='text'
					name='behance'
					id='behance'
					value={state.behance}
					onChange={handleChange}
				/>
			</FormField>
		</form>
	);
};

export default SocialFormSection;
