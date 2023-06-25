import { ReactNode } from 'react';

import '@/styles/globals.css';
import Sidebar from '@/components/SIdebar';
import NavBar from '@/components/NavBar';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<div className='container mx-auto'>
					<NavBar />
					<div className='flex justify-between gap-x-20 mt-16 mb-10'>
						<Sidebar />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
