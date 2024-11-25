import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { UseFormReset } from 'react-hook-form';
import { TForm } from '../constants';

export const useResetForm = (reset: UseFormReset<TForm>) => {
	const store = useStore();

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
};
