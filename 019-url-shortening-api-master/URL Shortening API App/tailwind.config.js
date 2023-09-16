/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        "lighter-gray": "#EFF1F7",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-d-blue": "hsl(255, 11%, 22%)",
        "very-d-violet": "hsl(260, 8%, 14%)",
      },
      screens: {
        'xl': '1152px'
      }
    },
  },
  plugins: [],
};

