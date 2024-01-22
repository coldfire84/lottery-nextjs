import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // See: https://tailwindcolor.com/
      colors: {
        light: {
          nav: colors.slate[300],
          'nav-text': '#456268',
          bg: colors.slate[100],
          // 'primary': '#79A3B1',
          primary: colors.green[500],
          // 'secondary': '#D0E8F2',
          secondary: colors.slate[200],
          text: '#456268',
        },
        dark: {
          nav: colors.slate[600],
          'nav-text': '#DDE6ED',
          bg: colors.slate[800],
          // 'primary': '#9DB2BF',
          primary: colors.green[500],
          secondary: '#526D82',
          text: '#DDE6ED',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
