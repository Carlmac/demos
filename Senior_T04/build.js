({
  baseUrl: 'scripts',
  // paths: {
  //   jquery: 'lib/jquery',
  //   Slider: 'app/Slider',
  //   Waterfall: 'app/Waterfall',
  //   BackToTop: 'app/BackToTop',
  //   requireLib: 'require'
  // },
  // name: 'main',
  // out: './scripts/dist/main-built.js',
  // include: ['requireLib']
  modules: [
    {
      name: 'bundle'
    }
  ],
  paths: {
    bundle: 'main',
    jquery: 'lib/jquery',
    Slider: 'app/Slider',
    Waterfall: 'app/Waterfall',
    BackToTop: 'app/BackToTop'
  },
  dir: 'scripts/dist',
  keepBuildDir: false
})