const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

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
        poppins: ['Poppins', 'sans-serif'],
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
      gridTemplateColumns: {
        '15-85': '15% 85%',
      },
      gridTemplateRows: {
        '1-2-1': '1fr 2fr 1fr',
      },
      padding: {
        '17/100': '17%',
        '12/100': '12%',
        '8/100': '8%',
      },
      translate: {
        120: '120%',
        '-120': '-120%',
      },
      transitionDuration: {
        1075: '1075ms',
        1100: '1100ms',
        1150: '1150ms',
        1200: '1200ms',
        1300: '1300ms',
        1500: '1500ms',
        1600: '1600ms',
        1700: '1700ms',
        1800: '1800ms',
        2000: '2000ms',
      },
      inset: {
        initial: 'initial',
        '-1/10': '-10%',
        '5/100': '5%',
        '28/100': '28%',
        '30/100': '30%',
        '32/100': '32%',
        '48/100': '48%',
        '52/100': '52%',
        '68/100': '68%',
        '72/100': '72%',
        '95/100': '95%',
      },
      height: {
        'screen-w2': '200vw',
      },
      width: {
        'screen-2': '200vw',
      },
      minWidth: {
        50: '12.5rem',
      },
      borderRadius: {
        50: '50%',
      },
      zIndex: {
        11: '11',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents(() => {
        return {
          '.row-1-2': {
            gridRow: '1 / 2',
          },
          '.row-3-4': {
            gridRow: '3 / 4',
          },
        };
      });
    }),
  ],
};
