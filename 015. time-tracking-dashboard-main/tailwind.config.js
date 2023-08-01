/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "card-main-blue": "hsl(246, 80%, 60%)",
        "card-orange": "hsl(15, 100%, 70%)",
        "card-light-blue": "hsl(195, 74%, 62%)",
        "card-red": "hsl(348, 100%, 68%)",
        "card-green": "hsl(145, 58%, 55%)",
        "card-purple": "hsl(264, 64%, 52%)",
        "card-yellow": "hsl(43, 84%, 65%)",
        "Very-dark-blue": "hsl(226, 43%, 10%)",
        "Dark-blue": "hsl(235, 46%, 20%)",
        "Desaturated-blue": "hsl(235, 45%, 61%)",
        "Pale-Blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        Rubik: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};

