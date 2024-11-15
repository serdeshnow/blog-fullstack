import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
	linkTo?: string;
	iconId: string;
	fontSize?: string;
	children?: React.ReactNode;
}

export const Icon: React.FC<Props> = ({
	linkTo = '/',
	iconId,
	fontSize = '25px',
	children,
}) => {
	return (
		<Link to={linkTo} className="flex-default gap-2.5">
			<i className={`icon-${iconId}`} style={{ fontSize: fontSize }} />
			{children}
		</Link>
	);
};
