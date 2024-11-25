import { IUser, TUser } from '../constants';
import { getUser, sessions } from './';
import { addUser } from './add-user.ts';

export const server = {
	async authorize(
		authLogin: string,
		authPassword: string,
	): Promise<{ error: string | null; response: Partial<TUser> }> {
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
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(
		regLogin: string,
		regPassword: string,
	): Promise<{ error: string | null; response: TUser }> {
		const existingUser: IUser = await getUser(regLogin);

		if (existingUser) {
			return {
				error: 'User already exists',
				response: null,
			};
		}

		const user: IUser = await addUser(regLogin, regPassword);

		console.log(user);

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async logout(session: string): Promise<void> {
		sessions.remove(session);
	},
};
