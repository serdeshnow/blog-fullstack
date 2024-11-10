import { Link } from 'react-router-dom';

export const Header = () => {
	const isAuth: boolean = true;

	return (
		<header
			className="xl:w-3/5 mx-10 w-5/6 flex-default text-center bg-green mt-1 p-1 rounded text-light shadow-lg transition-all duration-300 ease-in-out">
			<ul className="flex-default gap-5">
				<li>
					<button>
						<i className="icon-back hover:" style={{ fontSize: '25px' }} />
					</button>
				</li>
				<li>
					<Link to="/" className="flex-default gap-2.5">
						<i className="icon-fastfood" style={{ fontSize: '25px' }} />
						<h1 className="text-lg uppercase font-semibold">Еда и точка</h1>
					</Link>
				</li>
			</ul>

			<ul className="flex-default gap-5">
				<li>
					<a href="/">
						<i className="icon-groups" style={{ fontSize: '25px' }} />
					</a>
				</li>
				<li>
					<a href="/">
						<i className="icon-new-post" style={{ fontSize: '25px' }} />
					</a>
				</li>
				{
					isAuth ? (
						<li>
							<a href="/" className="flex-default">
								<span> username </span>
								<i className="icon-exit" style={{ fontSize: '25px' }} />
							</a>
						</li>
					) : (
						<li>
							<a href="/">войти</a>
						</li>

					)
				}
			</ul>
		</header>
	);
};
