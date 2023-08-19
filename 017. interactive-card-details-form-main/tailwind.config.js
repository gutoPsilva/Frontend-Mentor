/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "g-light-purple": "hsl(249, 99%, 64%)",
        "g-dark-purple": "hsl(278, 94%, 30%)",
        "l-grayish-violet": "hsl(270, 3%, 87%)",
        "d-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "red-error": "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        "space-grotesk": "'Space Grotesk', sans-serif",
      },
    },
  },
  plugins: [],
};
