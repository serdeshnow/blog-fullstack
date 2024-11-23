import type { IUser } from '../../constants';

export const selectUserLogin = ({ user }: { user: IUser }) => user.login;
