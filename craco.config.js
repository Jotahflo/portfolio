module.exports = {
    style: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          require('cssnano')({
            preset: 'default',
          }),
        ],
      },
    },
  }