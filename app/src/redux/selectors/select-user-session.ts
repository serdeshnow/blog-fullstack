import type { IUser } from '../../constants';

export const selectUserSession = ({ user }: { user: IUser }) => user.session;
