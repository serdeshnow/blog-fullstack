/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				light:{
					'400': 'var(--color-light-400)',
					'500': 'var(--color-light-500)',
					'600': 'var(--color-light-600)'
				}
			}
    },
  },
  plugins: [],
}

