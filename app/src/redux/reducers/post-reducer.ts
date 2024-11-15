import { IAction } from '../../constants';

const initialPostState = {};

export const postReducer = (state = initialPostState, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
