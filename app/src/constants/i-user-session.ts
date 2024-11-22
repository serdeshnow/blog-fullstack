import type { Role } from './role.ts';

export interface IUserSession {
	id: string;
	login: string;
	roleId: Role;
	session: string;
}

export type TUserSession = IUserSession | null;
