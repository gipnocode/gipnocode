module.exports = {
  plugins: [
    require("autoprefixer"),
    require("css-mqpacker"),
    require("postcss-custom-properties")({
      // preserve: false
    }),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
