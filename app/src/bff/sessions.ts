import type { IUser } from '../constants';

export const sessions = {
	list: {} as Record<string, IUser[]>,
	create(user: IUser): string {
		const hash = Math.random().toFixed(50).toString();
		this.list[hash] = this.list[hash] ?? [];
		Object.assign(this.list[hash], user);
		return hash;
	},
	remove(hash: string): void {
		delete this.list[hash];
	},
};
