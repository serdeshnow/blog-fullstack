import { Outlet } from 'react-router-dom';
import { Footer, Header } from './';

export const RootLayout = () => {
	return (
		<>
			<Header/>
			<main className="py-16 flex flex-1 items-end">
				<Outlet />
			</main>
			<Footer/>
		</>
	);
};
