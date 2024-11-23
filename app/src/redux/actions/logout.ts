import { ActionType, type IUser } from '../../constants';
import { server } from '../../bff';

export const logout = (session: string) => {
	server.logout(session).then((result) => {
		console.log('removed from server:', result)
	});

	return {
		type: ActionType.LOGOUT,
	}
}
