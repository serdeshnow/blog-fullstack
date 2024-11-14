import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

export const RootLayout = () => {
	return (
		<>
			<Header />
			<main className="padding--width py-16 flex flex-1 items-center justify-center">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
