import { ReactNode } from 'react';
import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Codedamn - Profile',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<div className='container mx-auto'>
					<NavBar />
					{children}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
