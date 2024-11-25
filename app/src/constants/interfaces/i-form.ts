interface IRegForm {
	login: string;
	password: string;
	passcheck?: string;
}

interface IAuthForm {
	login: string;
	password: string;
	passcheck?: string;
}

export type TForm = IRegForm | IAuthForm;
