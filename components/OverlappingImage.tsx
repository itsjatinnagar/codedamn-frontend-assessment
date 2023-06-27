import Image from 'next/image';

const OverlappingImage = () => {
	return (
		<div className='flex items-center justify-center'>
			<Image
				src='/images/profile_pic.png'
				alt='codedamn profile_pic'
				width='24'
				height='24'
				className='border border-zinc-50 rounded-full'
			/>
			<Image
				src='/images/profile_pic.png'
				alt='codedamn profile_pic'
				width='24'
				height='24'
				className='-ml-1 border border-zinc-50 rounded-full'
			/>
		</div>
	);
};

export default OverlappingImage;
