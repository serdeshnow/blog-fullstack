import { Route, Routes } from 'react-router-dom';
import { RootLayout, Auth, Register, Users } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Auth />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<RootLayout />}>
				<Route index element={<>Главная</>} />
				<Route path="users" element={<Users />}/>
				<Route path="post/:post_id" element={<>Пост</>} />
				<Route path="post" element={<>Создать пост</>} />
			</Route>
			<Route path="*" element={<>Ошибка</>} />
		</Routes>
	);
};
