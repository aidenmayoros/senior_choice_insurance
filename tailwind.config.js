/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Include all source files in src directory
		'./public/index.html', // Include the main HTML file
		'./src/**/*.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
