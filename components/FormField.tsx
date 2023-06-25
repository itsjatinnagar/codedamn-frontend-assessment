import { ReactNode } from 'react';

const FormField = ({
	children,
	label,
	helperText,
}: {
	children: ReactNode;
	label: string;
	helperText?: string;
}) => {
	return (
		<div>
			<label className='mb-1 block font-semibold text-sm text-zinc-900'>
				{label}
			</label>
			<div>
				<div className='mb-2 px-3 py-[14px] border border-zinc-200 rounded-md'>
					{children}
				</div>
				{helperText && (
					<span className='font-normal text-sm text-zinc-500'>
						{helperText}
					</span>
				)}
			</div>
		</div>
	);
};

export default FormField;
