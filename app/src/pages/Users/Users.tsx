import { FC } from 'react';
import { Section, Title } from '../../components';
// import { useSelector } from 'react-redux';
import { type IUser } from '../../constants';

export const Users: FC = () => {
	const users:IUser[] = [
		{
			id: "001",
			login: "Serdeshnow",
			password: "123qwerty",
			registered_at: "2025-09-23",
			role_id: 0,
			session: "1"
		},
		{
			login: "den",
			password: "1234",
			registered_at: "2022-05-01 19:45",
			role_id: 2,
			id: "Y2WOV0F",
			session: "2"
		},
	];

	interface IRole {
		id: number,
		name: string,
	}

	const roles:IRole[] = [
		{
			"id": 0,
			"name": "Администратор"
		},
		{
			"id": 1,
			"name": "Модератор"
		},
		{
			"id": 2,
			"name": "Читатель"
		},
		{
			"id": 3,
			"name": "Гость"
		}
	]

	return (
		<Section className="self-start">
			<Title title="Пользователи"/>
			<div
				className="grid grid-flow-col w-full text-start bg-light-500 shadow px-4 py-2.5 border border-gray-500 rounded">
				<div>Логин</div>
				<div>Дата регистрации</div>
				<div>Роль</div>
			</div>

			<ul className="flex flex-col gap-2.5 w-full">
				{users.map(({ id, login, registered_at }) =>
					<li
						className="flex-default items-center justify-between w-full bg-light-500 shadow px-4 py-2.5 border border-gray-500 rounded" key={id}>
						<p>{login}</p>
						<div className="flex-default">
							<i className="icon-calendar" style={{ fontSize: '25px' }} />
							<p>{registered_at}</p>
						</div>
						<div className="flex-default gap-12">
							<select name="role" id={id || undefined}
							        className="p-2 rounded bg-light-500 shadow border border-gray-500 focus:outline-0 selection:border-0">
								{roles.map(({ id, name }) =>
									<option key={id} value={id}>{name}</option>,
								)}
							</select>
							<div>
								<i
									className="icon-save  active:text-dark-500 hover:text-dark-400 transition-all duration-150 ease-in-out"
									style={{ fontSize: '25px' }} />
								<i
									className="icon-delete active:text-dark-500 hover:text-dark-400 transition-all duration-150 ease-in-out"
									style={{ fontSize: '25px' }} />
							</div>
						</div>
					</li>
				)}
				<li
					className="flex-default items-center justify-between w-full bg-light-500 shadow px-4 py-2.5 border border-gray-500 rounded">
					<p>username</p>
					<div className="flex-default">
						<i className="icon-calendar" style={{ fontSize: '25px' }} />
						<p>01.11.2024 11:39</p>
					</div>
					<div className="flex-default gap-12">
						<select name="role" id="001"
						        className="p-2 rounded bg-light-500 shadow border border-gray-500 focus:outline-0 selection:border-0">
							<option value="admin">Администратор</option>
							<option value="moderator">Модератор</option>
							<option value="reader">Читатель</option>
							<option value="guest">Гость</option>
						</select>
						<div>
							<i
								className="icon-save  active:text-dark-500 hover:text-dark-400 transition-all duration-150 ease-in-out"
								style={{ fontSize: '25px' }} />
							<i className="icon-delete hover:text-dark-500 transition-all duration-150 ease-in-out"
							   style={{ fontSize: '25px' }} />
						</div>
					</div>
				</li>
			</ul>
		</Section>
	);
};
