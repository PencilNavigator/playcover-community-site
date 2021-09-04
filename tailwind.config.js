module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "class", // false or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gold: "#D2AC4A",
				"gold-light": "#FFD700",
				"logo-pink": "#FF0F7B",
				"logo-orange": "#F89B29",
			},
		},
		fontFamily: {
			montserrat: "Montserrat, Arial, sans-serif",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
