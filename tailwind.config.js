module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.js"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
