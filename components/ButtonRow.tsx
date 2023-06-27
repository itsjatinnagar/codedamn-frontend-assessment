import { ReactNode } from 'react';

const ButtonRow = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex items-center justify-end gap-x-3'>{children}</div>
	);
};

export default ButtonRow;
