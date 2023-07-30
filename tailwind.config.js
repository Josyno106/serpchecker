/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        blurry1: "url('/bbblurry.svg')",
        // joshua: "./../../static/bbblurry.svg",
      },
      colors: {
        textPrimary: "#2A1E5F",
      },
    },
  },
  plugins: [],
};
