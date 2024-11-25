import { api } from '../api';
import { generateDate } from './generate-date.ts';
import type { IUser } from '../constants';

export const addUser = async (login: string, password: string): Promise<IUser> =>
	await api.post('users', {
		login,
		password,
		registered_at: generateDate(),
		role_id: 2,
	}).then(response => response.data);
