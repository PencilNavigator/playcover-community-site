module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "class", // false or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				blob: "blob 6s infinite",
			},

			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},

					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
			},

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
