import { Logo } from '../reusable';

export const Footer = () => {
	return (
		<footer className="xl:w-3/5 mx-10 w-5/6 flex-default text-center bg-green mb-1 py-1 px-2.5 rounded text-light-500 shadow-lg transition-all duration-300 ease-in-out">
			<ul className="flex-default gap-5">
				<li><Logo/></li>
				<li>@Serdeshnow</li>
			</ul>
			<ul className="flex-default gap-5">
				<li>date</li>
				<li>map</li>
			</ul>
		</footer>
	);
};
