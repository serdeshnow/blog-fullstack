import { FC, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, setUser } from '../../redux';
import { IRegister, regFormSchema, Role} from '../../constants';
import { Input } from '../../components';

export const Register: FC = () => {
	const {
		register,
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
	const roleId = useSelector(selectUserRole);

	const [serverError, setServerError] = useState<string>('');

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
