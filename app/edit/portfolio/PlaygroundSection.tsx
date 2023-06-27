'use client';

import { useState } from 'react';
import PlaygroundCard from '@/components/PlaygroundCard';

const PlaygroundSection = () => {
	const [state, setState] = useState([true, false, false, false]);

	const handleClick = (position: number) => {
		const updatedState = state.map((value, index) =>
			index === position ? !value : value
		);
		setState(updatedState);
	};

	return (
		<div>
			<div className='mb-6 flex items-center justify-between'>
				<h3 className='font-bold text-2xl'>Playgrounds</h3>
				<p className='cursor-pointer text-zinc-500'>See all</p>
			</div>
			<div className='grid grid-cols-2 gap-5'>
				<PlaygroundCard
					isActive={state[0]}
					onClickHandler={() => handleClick(0)}
				/>
				<PlaygroundCard
					isActive={state[1]}
					onClickHandler={() => handleClick(1)}
				/>
				<PlaygroundCard
					isActive={state[2]}
					onClickHandler={() => handleClick(2)}
				/>
				<PlaygroundCard
					isActive={state[3]}
					onClickHandler={() => handleClick(3)}
				/>
			</div>
		</div>
	);
};

export default PlaygroundSection;
