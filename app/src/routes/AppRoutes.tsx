import { Route, Routes } from 'react-router-dom';
import { RootLayout } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<>Авторизация</>} />
			<Route path="/register" element={<>Регистрация</>} />
			<Route path="/" element={<RootLayout />}>
				<Route index element={<>Главная</>} />
				<Route path="users" element={<>Пользователи</>} />
				<Route path="post/:post_id" element={<>Пост</>} />
				<Route path="post" element={<>Создать пост</>} />
			</Route>
			<Route path="*" element={<>Ошибка</>} />
		</Routes>
	);
};
