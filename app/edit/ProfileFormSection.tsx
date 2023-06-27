'use client';

import FormField from '@/components/FormField';
import { ChangeEvent, useState } from 'react';

const ProfileFormSection = () => {
	enum gender {
		undefined,
		male,
		female,
	}

	const [state, setState] = useState({
		name: 'Marina Budarina',
		about: 'Lorem ipsum dolor sit amet.',
		profession: 'Student',
		dob: '',
		gender: gender.undefined,
	});

	const handleChange = (
		event: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const name = event.target.name;
		const value = event.target.value;

		setState({ ...state, [name]: value });
	};

	return (
		<form className='flex flex-col gap-y-6'>
			<FormField
				htmlFor='name'
				label='Display name'
				helperText='Name entered above will be used for all issued certificates'
			>
				<input
					type='text'
					name='name'
					id='name'
					value={state.name}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='about' label='About'>
				<textarea
					name='about'
					id='about'
					className='h-10 resize-none'
					value={state.about}
					onChange={handleChange}
				></textarea>
			</FormField>
			<FormField htmlFor='profession' label='Profession'>
				<input
					type='text'
					name='profession'
					id='profession'
					value={state.profession}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='dob' label='Date of birth'>
				<input
					type='date'
					placeholder='DD/MM/YYYY'
					name='dob'
					id='dob'
					value={state.dob}
					onChange={handleChange}
				/>
			</FormField>
			<FormField htmlFor='gender' label='Gender'>
				<select
					name='gender'
					id='gender'
					value={state.gender}
					onChange={handleChange}
				>
					<option value={gender.undefined} disabled>
						What is your gender
					</option>
					<option value={gender.male}>Male</option>
					<option value={gender.female}>Female</option>
				</select>
			</FormField>
		</form>
	);
};

export default ProfileFormSection;
