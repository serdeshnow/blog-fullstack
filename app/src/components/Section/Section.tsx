import React, { FC } from 'react';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const Section: FC<Props> = ({className, children}) => {
	return (
		<section className={"w-full flex flex-col items-center justify-center gap-5" +
			" transition-all duration-300 ease-in-out " + className}>{children}</section>
	);
};
