module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "class", // false or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",

			lg: "1024px",

			xl: "1280px",

			"2xl": "1680px",

			FHD: "1920px",

			"4K": "3840px",
		},
		extend: {
			colors: {
				gold: "#D2AC4A",
				"gold-light": "#FFD700",
				"logo-pink": "#FF0F7B",
				"logo-orange": "#F89B29",
			},
		},
		fontFamily: {
			body: '"Roboto", Arial, sans-serif',
			logo: "Roboto, Arial, sans-serif",
			montserrat: "Montserrat, Arial, sans-serif",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
