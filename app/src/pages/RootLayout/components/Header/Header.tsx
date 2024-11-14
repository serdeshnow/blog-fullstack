import { Link, useNavigate } from 'react-router-dom';
import { Icon, Logo } from '../../../../components';
import React from 'react';

export const Header : React.FC = () => {
	const navigate = useNavigate();

	const isAuth: boolean = true;

	return (
		<header
			className="padding--width mx-10 flex-default text-center bg-green-500 mt-1 p-1 rounded text-light-500 shadow-lg transition-all duration-300 ease-in-out">
			<ul className="flex-default gap-5">
				<li className='green-hover-active'>
					<button onClick={() => navigate(-1)}>
						<i className="icon-back" style={{ fontSize: '25px' }} />
					</button>
				</li>
				<li className='green-hover-active'>
					<Logo/>
				</li>
			</ul>

			<ul className="flex-default gap-5">
				<li className='green-hover-active'>
					<Icon linkTo='/' iconId='groups'/>
				</li>
				<li className='green-hover-active'>
					<Icon linkTo='/' iconId='new-post'/>
				</li>
				{
					isAuth ? (
						<li className="flex-default gap-5 green-hover-active">
							<span className='cursor-default'> username </span>
							<Icon linkTo='/login' iconId='exit'/>
						</li>
					) : (
						<li className='green-hover-active'>
							<Link to="/app/public">Войти</Link>
						</li>

					)
				}
			</ul>
		</header>
	);
};
