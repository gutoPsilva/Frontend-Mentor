/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": "League Spartan, sans-serif",
      },

      colors: {
        //theme 1
        "main-prim": "hsl(222, 26%, 31%)",
        "keypad-prim": "hsl(223, 31%, 20%)",
        "screen-prim": "hsl(224, 36%, 15%)",

        "key-desb-prim": "hsl(225, 21%, 49%)",
        "lighter-desb-prim": "hsl(226, 19%, 57%)",

        "key-red-prim": "hsl(6, 63%, 50%)",
        "lighter-dark-red": "hsl(6, 68%, 56%)",

        "key-light-orange": "hsl(30, 25%, 89%)",
        // the hover is simply white bg

        "very-dark-gb-prim": "hsl(221, 14%, 31%)",

        //theme 2
        "main-sec": "hsl(0, 0%, 90%)",
        "keypad-sec": "hsl(0, 5%, 81%)",
        "screen-sec": "hsl(0, 0%, 93%)",

        "key-cyan-sec": "hsl(185, 42%, 37%)",
        "lighter-cyan-sec": "hsl(185, 34%, 46%)",

        "key-orange-sec": "hsl(25, 98%, 40%)",
        "lighter-orange-sec": "hsl(25, 82%, 51%)",

        "key-gray-y-sec": "hsl(45, 7%, 89%)",

        "very-dark-gy-sec": "hsl(60, 10%, 19%)",

        //theme 3
        "main-thr": "hsl(268, 75%, 9%)",
        "keypad-screen-thr": "hsl(268, 71%, 12%)",

        "key-violet-thr": "hsl(281, 89%, 26%)",
        "lighter-violet-thr": "hsl(281, 71%, 46%)",

        "key-pure-cyan-thr": "hsl(176, 100%, 44%)",
        "lighter-pure-cyan-thr": "hsl(176, 100%, 77%)",

        "key-very-dv-thr": "hsl(268, 47%, 21%)",
        "lighter-very-dv-thr": "hsl(267, 48%, 41%)",

        "light-yellow": "hsl(52, 100%, 62%)",
        "very-dark-blue": "hsl(198, 20%, 13%)",
      },

      boxShadow: {
        //theme 1
        desbPrim: "0 4px 0 0 rgb(64, 78, 114)",
        darkRed: "0 4px 0 0 rgb(147, 38, 26)",
        lightOrange: "0 4px 0 0 rgb(180, 165, 151)",

        //theme2
        cyanSec: "0 4px 0 0 hsl(185, 58%, 25%)",
        darkOrange: "0 4px 0 0 hsl(25, 99%, 27%)",
        grayOrange: "0 4px 0 0 hsl(35, 11%, 61%)",

        //theme3
        vividMagenta: "0 4px 0 0 hsl(285, 91%, 52%)",
        softCyan: "0 4px 0 0 hsl(177, 92%, 70%)",
        darkMagenta: "0 4px 0 0 hsl(290, 70%, 36%)",
      },
    },
  },
  plugins: [],
};