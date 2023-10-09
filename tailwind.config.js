/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#81bb00",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
