import { ActionType, IAction, Role } from '../../constants';

const initialUserState = {
	id: null,
	login: null,
	roleId: Role.guest,
	session: null,
};

export const userReducer = (state = initialUserState, action: IAction) => {
	switch (action.type) {
		case ActionType.SET_USER: {
			return {
				...state,
				...(action.payload as Partial<typeof state>),
			};
		}
		default:
			return state;
	}
};
