import type { IUser } from '../constants';

export const getUser = async (login: string): Promise<IUser> => {
	return fetch(`http://localhost:3005/users?login=${login}`)
		.then((response) => response.json())
		.then((user) => user[0]);
};
