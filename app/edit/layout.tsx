import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex items-start gap-x-20 mt-16 mb-10'>
			<Sidebar />
			{children}
		</div>
	);
};

export default Layout;
