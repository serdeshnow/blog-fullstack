import { IUser } from '../constants';
import { createSession, getUser, sessions } from './';
import { addUser } from './add-user.ts';

export const server = {
	async authorize(authLogin: string, authPassword: string) {
		const user: IUser = await getUser(authLogin);

		if (!user) {
			return {
				error: 'No user found',
				response: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Invalid password',
				response: null,
			};
		}

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin: string, regPassword: string) {
		const user: IUser = await getUser(regLogin);

		if (user) {
			return {
				error: 'User already exists',
				response: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			response: createSession(2),
		};
	},
};
