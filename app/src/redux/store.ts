import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	// postReducer,
	// postsReducer,
	userReducer,
	// usersReducer
} from './reducers';
import type { IAction, IApp, IUser } from '../constants';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

interface IReducer {
	app: (state: IApp, action: IAction) => IApp;
	user: (state: IUser, action: IAction) => IUser;
	// users: IUser[];
	// post: IPost;
	// posts: IPost[];
}

const reducer = combineReducers<Partial<IReducer>>({
	app: appReducer,
	user: userReducer,
	// users: usersReducer,
	// post: postReducer,
	// posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
