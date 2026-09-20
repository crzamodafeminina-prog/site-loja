/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        marinho: "#071A33",
        azul: "#12345A",
        azulesc: "#092746",
        branco: "#FFFFFF",
        areia: "#E8E2D8",
        areiaesc: "#D8D0C5",
        offwhite: "#F7F8FA",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Karla", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
