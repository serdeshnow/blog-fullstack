import type { Role } from '../enums/role.ts';

export interface IUser {
	id: string | null;
	login: string | null;
	password?: string;
	registered_at?: string;
	role_id: Role;
	session: string;
}

export type TUser = IUser | null;
