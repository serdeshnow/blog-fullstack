import './styles/App.scss';
import { server } from './bff';

export const App = () => {
	const lol = server.authorize('Serdeshnowf', '123qwerty');
	console.log(lol);

	return <></>;
};
