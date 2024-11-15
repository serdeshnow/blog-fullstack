import { IAction } from '../../constants';

const initialUsersState = {};

export const usersReducer = (state = initialUsersState, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
