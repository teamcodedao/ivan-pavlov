import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1665px',
      },
      fontFamily: {
        macondo: 'var(--macondo-font)',
      },
      colors: {
        primary: '#CE8E11',
        secondary: '#F3E17F',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
