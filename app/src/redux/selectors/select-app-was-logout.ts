import type { IApp } from '../../constants';

export const selectAppWasLogout = ({ app }: { app: IApp }) => app.wasLogout;
