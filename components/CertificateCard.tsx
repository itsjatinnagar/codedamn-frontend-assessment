import Image from 'next/image';

const CertificateCard = () => {
	return (
		<div className='rounded-md p-5 flex flex-col gap-y-6 bg-zinc-50 border border-zinc-100'>
			<Image
				src='/images/html5.svg'
				alt='codedamn profile certificate'
				width='40'
				height='40'
			/>
			<div>
				<p className='font-semibold'>Advanced theoretical Javascript</p>
				<p className='text-sm text-zinc-500'>Issued on Dec 16th, 2022</p>
				<button className='mt-3 font-semibold text-zinc-500'>
					See credentials
				</button>
			</div>
		</div>
	);
};

export default CertificateCard;
