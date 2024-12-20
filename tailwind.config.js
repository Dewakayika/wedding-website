/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Instrument Sans", "serif"],
      },
    },
  },
  plugins: [],
};
