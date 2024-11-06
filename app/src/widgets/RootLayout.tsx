import { Outlet } from 'react-router-dom';
import { Footer, Header } from './';

export const RootLayout = () => {
	return (
		<>
			<Header/>
			<Outlet />
			<Footer/>
		</>
	);
};
