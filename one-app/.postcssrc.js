// https://github.com/michael-ciniawsky/postcss-load-config
let cssnano = require('cssnano');
module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 version', 'Chrome 31', 'Safari 8', 'IE 9'],
      },
      discardComments: {
        removeAll: true,
      },
    }),
  ],
}
