/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "320px",
			md: "768px",
			lg: "1024px",
			xl: "1980px",
			k4: "2560px",
		},
		extend: {
			colors: {
				mainDarkBg: "#1B2430",
				mainSolidYellow: "#F1D00A",
				mainOrcide: "#9FB4FF",
				mainBabyPink: "#9FB4FF",
				dirtyWhite: "#EEF3D2",

				pltCoolGreen: {
					100: "#F5F0BB",
					200: "#C4DFAA",
					300: "#90C8AC",
					400: "#73A9AD",
				},
				pltPoshPurple: {
					100: "#EEF3D2",
					200: "#B689C0",
					300: "#947EC3",
					400: "#6A67CE",
				},
			},
		},
	},
	plugins: [],
};
