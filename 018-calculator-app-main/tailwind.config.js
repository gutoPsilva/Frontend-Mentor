/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": "'League Spartan', sans-serif",
      },

      colors: {
        //theme 1
        "main-prim": "hsl(222, 26%, 31%)",
        "keypad-prim": "hsl(223, 31%, 20%)",
        "screen-prim": "hsl(224, 36%, 15%)",

        "key-desb-prim": "hsl(225, 21%, 49%)",

        "key-red-prim": "hsl(6, 63%, 50%)",

        "key-light-orange": "hsl(30, 25%, 89%)",

        "very-dark-gb-prim": "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",
      },
    },

    boxShadow: {
      //theme 1
      desbPrim: "0 3px 0 0 rgb(64, 78, 114)",
      darkRed: "0 3px 0 0 rgb(147, 38, 26)",
      lightOrange: "0 3px 0 0 rgb(180, 165, 151)",
    },
  },
  plugins: [],
};