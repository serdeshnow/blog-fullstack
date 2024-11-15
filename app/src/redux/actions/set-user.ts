import { ActionType, TUserSession } from '../../constants';

export const setUser = (user: TUserSession) => ({
	type: ActionType.SET_USER,
	payload: user,
});
