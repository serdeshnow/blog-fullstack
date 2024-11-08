import { Outlet } from 'react-router-dom';
import { Footer, Header } from './';

export const RootLayout = () => {
	return (
		<>
			<Header />
			<main className="py-16 flex flex-1 items-center justify-center w-3/5">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
