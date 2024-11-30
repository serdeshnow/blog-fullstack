import { FC } from 'react';

interface Props {
	title: string;
}

export const Title: FC<Props> = ({title}) => {
	return (
		<h3 className="text-3xl font-semibold">{title}</h3>
	);
};
