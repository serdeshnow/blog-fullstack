import { ActionType, IAction, IUser, Role } from '../../constants';

// Инициализируем начальное состояние с типом IUser
const initialUserState: IUser = {
	id: null,
	login: null,
	role_id: Role.guest,
	session: "",
};

// Типизируем редьюсер с учетом того, что состояние - это IUser
export const userReducer = (state: IUser = initialUserState, action: IAction): IUser => {
	switch (action.type) {
		case ActionType.SET_USER:
			return {
				...state,
				...(action.payload as Partial<IUser>), // частичное обновление
			};
		case ActionType.LOGOUT:
			return initialUserState; // возвращаем начальное состояние
		default:
			return state; // возвращаем текущее состояние
	}
};
