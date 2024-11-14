import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useNavigate } from 'react-router-dom';

const authFormSchema = yup.object().shape({
	login: yup.string()
	          .required('Login is required')
	          .matches(/^\w+$/, 'Login should have letters and numbers')
	          .min(3, 'Login should have more then 3 symbols')
	          .max(20, 'Login should have less then 20 symbols'),
	password: yup.string()
	             .required('Password is required')
	             .matches(/^\w/, 'Password set incorrectly')
	             .min(3, 'Password should have more then 3 symbols')
	             .max(20, 'Password should have less then 20 symbols')
})

export const Auth: FC = () => {
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	})

	const navigate = useNavigate();

	interface IAuth {
		login: string,
		password: string,
	}

	const [serverError, setServerError] = useState('');

	const onSubmit  = ({ login, password }:IAuth) => {
		server.authorize(login, password).then(({response, error}) => {
			if(error) {
				setServerError(`Request error: ${error}`)
			}
			else {
				navigate('/')
			}
			});
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError;

	return (
		<section className="padding--width flex flex-col items-center justify-center gap-5">
			<h3 className="text-3xl font-semibold">Вход</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="flex-default flex-col gap-5 w-1/3">
				<input type="text" autoComplete="username" placeholder="Логин" {...register('login')} className="form-element form-element-input"/>
				<input type="text" autoComplete="current-password" placeholder="Пароль" {...register('password')} className="form-element form-element-input"/>
				<button type="submit" disabled={!!errorMessage} className="form-element form-element-button">Войти</button>
			</form>
			{errorMessage &&
				<p className="bg-red-500 text-light-500 rounded-lg px-4 py-3">{errorMessage}</p>
			}
		</section>
	);
};
