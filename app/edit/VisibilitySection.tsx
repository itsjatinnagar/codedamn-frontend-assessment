'use client';

import { MouseEventHandler, useState } from 'react';

const Toggle = ({
	isToggle,
	onClickHandler,
}: {
	isToggle: boolean;
	onClickHandler: MouseEventHandler;
}) => {
	return (
		<div
			className={
				isToggle
					? 'relative w-fit cursor-pointer toggle active'
					: 'relative w-fit cursor-pointer toggle'
			}
			onClick={onClickHandler}
		>
			<input type='checkbox' className='sr-only' checked={isToggle} readOnly />
			<div className='bg-zinc-200 block h-6 w-11 rounded-full track'></div>
			<div className='absolute flex h-5 w-5 items-center justify-center rounded-full bg-white transition thumb'></div>
		</div>
	);
};

const VisibilitySection = () => {
	const [state, setState] = useState([true, true, true]);

	const handleClick = (position: number) => {
		const updatedState = state.map((value, index) =>
			index === position ? !value : value
		);
		setState(updatedState);
	};

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
					<Toggle isToggle={state[0]} onClickHandler={() => handleClick(0)} />
				</div>
				<div className='flex items-center justify-between'>
					<div>
						<p className='font-bold'>XP</p>
						<p className='text-zinc-500'>Shows the XP you have earned</p>
					</div>
					<Toggle isToggle={state[1]} onClickHandler={() => handleClick(1)} />
				</div>
				<div className='flex items-center justify-between'>
					<div>
						<p className='font-bold'>Achievement badges</p>
						<p className='text-zinc-500'>
							Shows your relative percentile and proficiency
						</p>
					</div>
					<Toggle isToggle={state[2]} onClickHandler={() => handleClick(2)} />
				</div>
			</div>
		</div>
	);
};

export default VisibilitySection;
