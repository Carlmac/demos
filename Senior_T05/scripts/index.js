import '../css/main.css';

import $ from 'jquery';

import Slider from './app/Slider';

import Waterfall from './app/Waterfall';

import BackToTop from './app/BackToTop';

Slider.init($('#wallpaper-slider'));

Waterfall.init($('#pictures .pics-wrap'));

BackToTop.init($('#btn-back-to-top'));