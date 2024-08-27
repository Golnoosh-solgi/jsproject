/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["inter" ,"sanserif","Arial" ]
      },
      colors:{
        "app-texts":"#152536"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')],
};
