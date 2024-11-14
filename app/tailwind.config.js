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
				},
				gray:{
					'400': 'var(--color-gray-400)',
					'500': 'var(--color-gray-500)',
					'600': 'var(--color-gray-600)'
				},
				dark:{
					'400': 'var(--color-dark-400)',
					'500': 'var(--color-dark-500)',
					'600': 'var(--color-dark-600)'
				},
				orange:{
					'400': 'var(--color-orange-400)',
					'500': 'var(--color-orange-500)',
					'600': 'var(--color-orange-600)'
				},
				green:{
					'400': 'var(--color-green-400)',
					'500': 'var(--color-green-500)',
					'600': 'var(--color-green-600)'
				},
			}
    },
  },
  plugins: [],
}

