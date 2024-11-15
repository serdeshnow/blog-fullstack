import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const InputComponent: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
	props,
	ref,
) => {
	return <input ref={ref} className={props.className} {...props} />;
};

export const Input = React.forwardRef(InputComponent);
