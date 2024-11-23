import { Link, useNavigate } from 'react-router-dom';
import { Icon, Logo } from '../../../../components';
import React from 'react';
import { Role } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../../../redux/selectors';
import { logout} from '../../../../redux/actions';

export const Header: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);


	return (
		<header
			className="padding--width mx-10 flex-default text-center bg-green-500 mt-1 p-1 rounded text-light-500 shadow-lg transition-all duration-300 ease-in-out">
			<ul className="flex-default gap-5">
				<li>
					<button onClick={() => navigate(-1)}>
						<i className="icon-back" style={{ fontSize: '25px' }} />
					</button>
				</li>
				<li>
					<Logo />
				</li>
			</ul>

			<ul className="flex-default gap-5">
				<li>
					<Icon linkTo="/" iconId="groups" />
				</li>
				<li>
					<Icon linkTo="/" iconId="new-post" />
				</li>
				{roleId === Role.guest ? (
					<li className="pr-2">
						<button onClick={() => dispatch(logout(session))}>
							<Link to="/login">Войти</Link>
						</button>
					</li>
				) : (
					<li className="flex-default gap-5">
						<button onClick={() => dispatch(logout(session))}>
							<span className="cursor-default green-hover-active"> {login} </span>
						</button>
						<Icon linkTo="/login" iconId="exit" />
					</li>
				)}
			</ul>
		</header>
	);
};
