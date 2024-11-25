import type { IUser } from '../../constants';

export const selectUserRole = ({ user }: { user: IUser }) => user.role_id;
