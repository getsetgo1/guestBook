/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      NanumGothic: ["NanumGothic"],
      KotraBold: ["KOTRA_BOLD-Bold"],
      TmoneyRoundWind : ['TmoneyRoundWindExtraBold'],
    },
  },

  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
