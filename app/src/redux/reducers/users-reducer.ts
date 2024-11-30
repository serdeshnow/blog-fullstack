import { IAction, type IUser } from '../../constants';

const initialUsersState: IUser[] = [];

export const usersReducer = (state = initialUsersState, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
