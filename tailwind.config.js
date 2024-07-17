/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },

    extend: {
      screens: {
        xs: "576px",
        xl: "1140px",
        "2xl": "1570px",
      },
      spacing: {
        26: "26px",
        30: "30px",
      },
      fontSize: {
        17: "17px",
        h1: [
          "60px",
          {
            lineHeight: "65px",
            letterSpacing: "-2px",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "58px",
            letterSpacing: "-1.8px",
          },
        ],
        h3: [
          "36px",
          {
            lineHeight: "48px",
            letterSpacing: "-1.2px",
          },
        ],
        h4: [
          "32px",
          {
            lineHeight: "44px",
            letterSpacing: "-1.2px",
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "34px",
            letterSpacing: "-0.5px",
          },
        ],
        h6: [
          "21px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.5px",
          },
        ],

        body1: [
          "19px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.2px",
          },
        ],
        body2: [
          "17px",
          {
            lineHeight: "29px",
            letterSpacing: "-0.2px",
          },
        ],

        button: [
          "17px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.6px",
          },
        ],
        label: [
          "15px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.1px",
          },
        ],
        labeltable: [
          "13px",
          {
            lineHeight: "auto",
            letterSpacing: "1.63px",
          },
        ],
      },
      fontFamily: {
        gb: ["gb", "sans-serif"],
        gr: ["gr", "sans-serif"],
        gm: ["gm", "sans-serif"],
        ib: ["ib", "sans-serif"],
        ir: ["ir", "sans-serif"],
        im: ["im", "sans-serif"],
      },
      lineHeight: {
        26: "26px",
      },
      colors: {
        blue16: "#161C2D",
        purple47: "#473BF0",
        green68: "#68D585",
        whiteE7: "#E7E9ED",
        redF7: "#F74D4D",
        whiteF7: "#F4F7FA",
      },
      letterSpacing: {
        am: "-0.1px",
      },
      borderRadius: {
        8: "8px",
        10: "10px",
        34: "34px",
      },
      keyframes: {
        right: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(165%)" },
        },
      },
      animation: {
        right: "right 2s  infinite",
      },
    },
  },
  plugins: [],
};
