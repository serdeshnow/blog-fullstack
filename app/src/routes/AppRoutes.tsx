import { Route, Routes } from 'react-router-dom';
import { RootLayout } from '../widgets';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<>Авторизация</>} />
			<Route path="/register" element={<>Регистрация</>} />
			<Route path="/" element={<RootLayout />}>
				<Route
					index
					element={
						<>
							<i className="icon-calendar" style={{ fontSize: '80px' }} />
							<i className="icon-calendar" />
							<h1 className="text-3xl font-bold underline">
								Hello world!
							</h1>
						</>
					}
				/>
				<Route path="users" element={<>Пользователи</>} />
				<Route path="post/:post_id" element={<>Пост</>} />
				<Route path="post" element={<>Создать пост</>} />
			</Route>
			<Route path="*" element={<>Ошибка</>} />
		</Routes>
	);
};
