import { removeComment } from './session';
import { ISession, Role } from '../constants';

export const createSession = (roleId: number): ISession => {
	const session: ISession = {
		logout(): void {
			Object.keys(session).forEach((key) => {
				if (typeof session[key as keyof typeof session] === 'function') {
					delete session[key as keyof typeof session];
				}
			});
		},
	};

	switch (roleId) {
		case Role.admin: {
			session.removeComment = removeComment;
			// TODO: other methods
			break;
		}
		case Role.moderator: {
			session.removeComment = removeComment;
			// TODO: other methods
			break;
		}
		case Role.reader: {
			// TODO: other methods
			break;
		}
		// TODO: Role.guest
		default:
			return session;
	}

	return session;
};
