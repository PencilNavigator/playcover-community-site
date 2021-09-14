module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "class", // false or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			"3xl": "1900px",
			// => @media (min-width: 1536px) { ... }
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
			sourceSansPro: "'Source Sans Pro', Arial, sans-serif",
			neon: "'Quicksand', cursive;",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
