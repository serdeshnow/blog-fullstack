import { IAction } from '../../constants';

const initialPostsState = {};

export const postsReducer = (state = initialPostsState, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
