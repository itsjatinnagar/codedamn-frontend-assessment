import { ReactNode } from 'react';
import Nav from '@/components/Nav';

import '@/styles/globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
