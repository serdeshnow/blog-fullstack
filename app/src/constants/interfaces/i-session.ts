interface ISession {
	logout(): void;
	removeComment?(comment: string): void;
	// TODO: define other methods
}

export type TSession = ISession | null;
