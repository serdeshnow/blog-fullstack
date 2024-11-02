export const generateDate = () =>
	new Date(Math.random() * 10 ** 11 + 1599999999999)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');
