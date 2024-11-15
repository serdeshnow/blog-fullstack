import type { IUser } from '../constants';

export const sessions = {
	list: {} as Record<string, IUser[]>,
	create(user: IUser) {
		const hash = Math.random().toFixed(50).toString();
		Object.assign(this.list[hash], user);
		return hash;
	},
	remove(hash: string) {
		delete this.list[hash];
	},
};
