import { ReactNode } from 'react';

const Button = ({
	children,
	className,
}: {
	children: ReactNode;
	className: string;
}) => {
	return (
		<button className={className}>
			<span className='font-semibold text-sm'>{children}</span>
		</button>
	);
};

export default Button;
