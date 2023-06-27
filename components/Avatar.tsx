import Image from 'next/image';

const Avatar = ({
	src,
	alt,
	size,
}: {
	src: string;
	alt: string;
	size: string;
}) => {
	return (
		<Image src={src} alt={alt} width={Number(size)} height={Number(size)} />
	);
};

export default Avatar;
