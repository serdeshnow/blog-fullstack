export const Header = () => {
	return (
		<header className="flex-default w-3/5 text-center">
			<ul className="flex-default gap-5">
				<li>
					<button className="">
						<i className="icon-exit" style={{fontSize:"25px"}}/>
					</button>
				</li>
				<li className="flex-default gap-2.5">
					<i className="icon-fastfood" style={{ fontSize: '25px' }} />
					<h1>Еда и точка</h1>
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
				<li>
					<a href="/">username</a>
				</li>
				<li>
					<a href="/">
						<i className="icon-exit" style={{ fontSize: "25px" }} />
					</a>
				</li>
			</ul>
		</header>
	);
};
