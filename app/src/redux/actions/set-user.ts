import { ActionType, TUser } from '../../constants';

export const setUser = (user: TUser) => ({
	type: ActionType.SET_USER,
	payload: user,
});
