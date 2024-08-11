import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    textColor: {
      light: colors.stone['400'],
      medium: colors.stone['600'],
      dark: colors.stone['800'],
    },
    extend: {
      colors: {
        textlight: colors.stone['400'],
        textmedium: colors.stone['600'],
        textdark: colors.stone['800'],
        primary: colors.stone['50'],
        secondary: colors.stone['200'],
        accent: colors.orange['200'],
      },
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'],
        scribe: ['Averia Serif Libre', 'sans'],
      },
    },
  },
  plugins: [],
}