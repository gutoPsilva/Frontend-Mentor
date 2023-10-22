/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)", // dark-elements
        "very-dark-blue": "hsl(207, 26%, 17%)", // dark-bg

        "dark-gray": "hsl(0, 0%, 52%)", // light-elements
        "very-light-gray": "hsl(0, 0%, 98%)", // light-bg

        "dark-mode": "hsl(0, 0%, 100%)", // text-dark
        "light-mode": "hsl(200, 15%, 8%)", // text-light
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%": { transform: "translate(-80px, 0px)"},
          "12%": { transform: "translate(-40px, 20px)"},
          "25%": { transform: "translate(0px, 0px)"},
          "37%": { transform: "translate(40px, 20px)"},
          "50%": { transform: "translate(80px, 0px)" },
          "62%": { transform: "translate(40px, -20px)"},
          "75%": { transform: "translate(0px, 0px)"},
          "88%": { transform: "translate(-40px, -20px)"},
          "100%": { transform: "translate(-80px, 0px)"},
        },
        slideLeft: {
          "0%": { transform: "translateX(-10px)" },
          "100%": {transform: "translateX(0px)"}
        }
      },
      animation: {
        scaleUp: "scaleUp 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        float: "float 9s linear infinite",
        slideLeft: "slideLeft 1s cubic-bezier(0.680, -0.550, 0.265, 1.550)"
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
      },
    },
  },
  plugins: [],
};
