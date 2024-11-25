import { ActionType, IAction, IApp } from '../../constants';
import type { Reducer } from 'redux';

const initialAppState = {
	wasLogout: false,
};

export const appReducer: Reducer<IApp, IAction> = (
	state: IApp = initialAppState,
	action: IAction,
): IApp => {
	switch (action.type) {
		case ActionType.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		default:
			return state;
	}
};
