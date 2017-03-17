requirejs.config({
  baseUrl: 'scripts/app',
  paths: {
    jquery: '../lib/jquery',
    Slider: 'Slider',
    Waterfall: 'Waterfall',
    BackToTop: 'BackToTop'
  }
});

require(['jquery', 'Slider', 'Waterfall', 'BackToTop'], function ($, Slider, Waterfall, BackToTop) {

  Slider.init($('#wallpaper-slider'));

  Waterfall.init($('#pictures .pics-wrap'));

  BackToTop.init($('#btn-back-to-top'));

});