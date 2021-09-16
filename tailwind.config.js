module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1900px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gold: '#D2AC4A',
        'gold-light': '#FFD700',
        'pastel-pink': '#9c2f64',
        'menu-pink': '#E23B8B',
        'logo-pink': '#FF0066',
        'logo-purple': '#b634e9',
        'logo-purple-dark': '#952abf',
        'logo-purple-darker': '#7f24a3',
        'text-purple': '#9861ff',
        body: '#171717',
        'nav-footer': '#141414',
      },
    },
    fontFamily: {
      sourceSansPro: "'Source Sans Pro', Arial, sans-serif;",
      openSans: "'Open Sans', Arial, sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
