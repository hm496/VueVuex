let cssnano = require('cssnano');

module.exports = {
  plugins: [
    cssnano({
      safe: true,
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: false,
        browsers: [
          "> 1%",
          "last 2 versions",
          "ie >= 9",
        ],
      },
      discardComments: {
        removeAll: true,
      },
    }),
  ],
};