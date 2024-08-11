import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    colors: {
      primary: colors.stone['50'],
      secondary: colors.stone['300'],
    },
    extend: {
    },
  },
  plugins: [],
}