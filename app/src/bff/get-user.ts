import { IUser } from '../interfaces';
import { getUsers } from './get-users.ts';

export const getUser = async (login: string) => {
	const users = await getUsers();

	return users.data.find((user: IUser) => user.login === login);
};
