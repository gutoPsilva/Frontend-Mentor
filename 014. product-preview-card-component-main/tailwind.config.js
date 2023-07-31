/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: "'Fraunces', serif",
        montserrat: "Montserrat, sans-serif",
      },
      fontSize: {
        '4.5xl': '2.5rem' 
      }, 
      colors: {
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        cream: "hsl(30, 38%, 92%)",
        darkCyan: "hsl(158, 36%, 37%)",
        darkerCyan: "#1A4031",
      },
      width: {
        '55%' : '55%',
        '45%' : '45%'
      }
    },
  },
  plugins: [],
};

