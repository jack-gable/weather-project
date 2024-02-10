/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideIn: {
					from: { transform: "translate(100%, 0%)" },
					to: { transform: "translate(0%, 100%)" },
				},
			},
			animation: {
				fadeInBD: "fadeIn 500ms",
				fadeInIW: "fadeIn 600ms both 400ms",
				slideIn: "slideIn 500ms both cubic-bezier(0, 0.6, 0.32, 1.06) 200ms",
			},
		},
	},
	plugins: [],
};
