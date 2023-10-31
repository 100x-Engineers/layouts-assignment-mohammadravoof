module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],

      },
      colors:{
        "neutral-1000":"#000000",
        "twitter-blue-default":"#1D9BF0",
        "stroke":"rgba(29, 155, 240, 0.24)",
        "secondary":"rgba(255, 255, 255, 0.60)",
      },
    },
  },
  plugins: [],
};
