const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Var', 'sans-serif'],
      },
      colors: {
        teal: {
          ...colors.teal,
          ...{
            600: '#0891B2',
            700: '#0E7490',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
