import type { Role } from './role.ts';

export interface IUser {
	id: string;
	login: string;
	password: string;
	registered_at: string;
	role_id: number;
}

export type TUser = IUser | null;

export interface IUserSession {
	id: string;
	login: string;
	roleId: Role;
	session: string;
}

export type TUserSession = IUserSession | null;
