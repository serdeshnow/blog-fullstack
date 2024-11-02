import { api } from '../api';
import { generateDate } from './generate-date.ts';

export const addUser = async (login: string, password: string) =>
	await api.post('users', {
		login,
		password,
		registered_at: generateDate(),
		role_id: 2,
	});
