import { FC } from 'react';
// import { Input } from '../../components';
import { Link } from 'react-router-dom';
// import './Register.scss';

export const Register: FC = () => {
	return (
		<section className="padding--width flex flex-col items-center justify-center gap-5">
			{/*<h3 className="text-3xl font-semibold">Регистрация</h3>*/}
			{/*<form onSubmit={handleSubmit(onSubmit)} className="flex-default flex-col gap-5 w-1/3">*/}
			{/*	<Input type="text" autoComplete="username" placeholder="Логин" {...register('login')}*/}
			{/*	       className="form-element form-element-input" />*/}
			{/*	<Input type="text" autoComplete="current-password"*/}
			{/*	       placeholder="Пароль" {...register('password')}*/}
			{/*	       className="form-element form-element-input" />*/}
			{/*	<button type="submit" disabled={!!errorMessage}*/}
			{/*	        className="form-element form-element-button">Войти*/}
			{/*	</button>*/}
			{/*</form>*/}
			{/*{errorMessage &&*/}
			{/*	<p className="bg-red-500 text-light-500 rounded-lg px-4 py-3">{errorMessage}</p>*/}
			{/*}*/}
			<p>
				Уже есть аккаунт?{' '}
				<Link to="/login" className="text-orange-500">
					войти
				</Link>
			</p>
		</section>
	);
};
