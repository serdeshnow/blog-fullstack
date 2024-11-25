import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './styles/index.css';
import './styles/variables.css';
import './styles/normalize.css';
import './styles/class-names.scss';
import './fontello/css/fontello.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter
				future={{
					v7_relativeSplatPath: true,
					v7_startTransition: true,
				}}
			>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);
