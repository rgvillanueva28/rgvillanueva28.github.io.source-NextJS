module.exports = {
  important: true,
  purge: ["./**/*.html", "./**/*.jsx"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1560px",
    },
    fontFamily: {
      display: ['Roboto'],
      body: ['Roboto']
    },
    extend: {
      colors: {
        dark: "#0B2545",
        accent: {
          light: "#8DA9C4",
          dark: "#13315C",
          mid: "#134074",
        },
        foreground: "#EEF4ED",
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "focus"],
    borderRadius: ["responsive", "hover", "focus"],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
