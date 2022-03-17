module.exports = {
  content: ["src/**/**"],
  safelist: [{ pattern: /.*/ }],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "3840px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      border : [ "hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
