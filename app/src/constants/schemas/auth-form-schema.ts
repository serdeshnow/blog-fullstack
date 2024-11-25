import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Login is required')
		.matches(/^\w+$/, 'Login should have letters and numbers')
		.min(3, 'Login should have more then 3 symbols')
		.max(20, 'Login should have less then 20 symbols'),
	password: yup
		.string()
		.required('Password is required')
		.matches(/^\w/, 'Password set incorrectly')
		.min(3, 'Password should have more then 3 symbols')
		.max(20, 'Password should have less then 20 symbols'),
});
