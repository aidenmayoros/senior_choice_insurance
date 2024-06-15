/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Include all source files in src directory
		'./public/index.html', // Include the main HTML file
		'./src/**/*.html',
	],
	theme: {
		extend: {
			keyframes: {
				'hamburger-to-x': {
					'0%, 100%': { transform: 'rotate(0)', opacity: 1 },
					'50%': { transform: 'rotate(90deg)', opacity: 0 },
				},
				'x-to-hamburger': {
					'0%, 100%': { transform: 'rotate(0)', opacity: 1 },
					'50%': { transform: 'rotate(-90deg)', opacity: 0 },
				},
			},
			animation: {
				'hamburger-to-x': 'hamburger-to-x 0.5s ease-in-out forwards',
				'x-to-hamburger': 'x-to-hamburger 0.5s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
