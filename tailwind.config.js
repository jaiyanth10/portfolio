/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        darkSlateGray: "#2F4F4F",
        lightCyan: "#E0FFFF",
        neonBlue: "#00FFFF",
        darkSlateGrayText: "#2F4F4F",
        lightGray: "#D3D3D3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
