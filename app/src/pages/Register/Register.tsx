import { FC, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../../components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { setUser } from '../../redux/actions';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { IRegister, Role } from '../../constants';
import { selectUserRole } from '../../redux/selectors';

const regFormSchema = yup.object().shape({
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
	passcheck: yup
		.string()
		.required('Password check is required')
		.oneOf([yup.ref('password')], "Passwords don't match"),
});

export const Register: FC = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	const dispatch = useDispatch();
	const store = useStore();
	const roleId = useSelector(selectUserRole);

	const [serverError, setServerError] = useState<string>('');

	useEffect(() => {
		// @ts-expect-error useStore doesn't see reducers
		let currentWasLogout = store.getState().app.wasLogout;
		const unsubscribe = store.subscribe(() => {
			const previousWasLogout = currentWasLogout;
			// @ts-expect-error useStore doesn't see reducers
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});

		return unsubscribe;
	}, [reset, store]);

	const onSubmit = ({ login, password }: IRegister) => {
		server.register(login, password).then(({ response, error }) => {
			if (error) {
				setServerError(`Request error: ${error}`);
				return;
			} else {
				console.log('dispatching:', login, password);
				dispatch(setUser(response));
			}
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== Role.guest) {
		return <Navigate to="/" />;
	}

	return (
		<section className="padding--width flex flex-col items-center justify-center gap-5">
			<h3 className="text-3xl font-semibold">Регистрация</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex-default flex-col gap-5 w-1/3"
			>
				<Input
					type="text"
					autoComplete="username"
					placeholder="Логин"
					{...register('login', {
						onChange: () => setServerError(''),
					})}
					className="form-element form-element-input"
				/>
				<Input
					type="text"
					autoComplete="current-password"
					placeholder="Пароль"
					{...register('password', {
						onChange: () => setServerError(''),
					})}
					className="form-element form-element-input"
				/>
				<Input
					type="text"
					autoComplete="repeat-password"
					placeholder="Повторите пароль"
					{...register('passcheck', {
						onChange: () => setServerError(''),
					})}
					className="form-element form-element-input"
				/>
				<button
					type="submit"
					disabled={!!errorMessage}
					className="form-element form-element-button"
				>
					Войти
				</button>
			</form>
			{errorMessage && (
				<p className="bg-red-500 text-light-500 rounded-lg px-4 py-3">{errorMessage}</p>
			)}
			<p>
				Уже есть аккаунт?{' '}
				<Link to="/login" className="text-orange-500">
					войти
				</Link>
			</p>
		</section>
	);
};
