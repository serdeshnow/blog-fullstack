import { ActionType } from '../../constants';
import { server } from '../../bff';

export const logout = (session: string) => {
	server.logout(session).then(() => {
		console.log('removed session from server');
	});

	return {
		type: ActionType.LOGOUT,
	};
};
