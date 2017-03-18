import $ from 'jquery';

var Slider = (function () {

  function _Slider(slider) {
    this.currentIndex = 0;
    this.timer;
    this.$slider = slider;
    this.$slides = this.$slider.find('.slide');
    this.$group = this.$slider.find('.slide-group');
    this.$prevBtn = this.$slider.find('.slide-btn-prev');
    this.$nextBtn = this.$slider.find('.slide-btn-next');

    this.createBullets();
    this.bindPrev();
    this.bindNext();
    this.autoMove();
  }

  _Slider.prototype.move = function (newIndex) {

    var _this = this;

    this.autoMove();

    var slideLeft, animateLeft;

    if (this.$group.is(':animated') || newIndex == this.currentIndex) return;

    this.$slider.find('.slide-bullet').eq(_this.currentIndex).removeClass('active');
    this.$slider.find('.slide-bullet').eq(newIndex).addClass('active');

    if (newIndex > this.currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    this.$slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });

    this.$group.animate({
      left: animateLeft
    }, function () {
      _this.$slides.eq(_this.currentIndex).css({
        display: 'none'
      });
      _this.$slides.eq(newIndex).css({
        left: 0
      });
      _this.$group.css({
        left: 0
      });
      _this.currentIndex = newIndex;
    });
  }

  _Slider.prototype.autoMove = function () {
    clearTimeout(this.timer);
    var _this = this;
    this.timer = setTimeout(function () {
      if (_this.currentIndex < _this.$slides.length - 1) {
        _this.move(_this.currentIndex + 1);
      } else {
        _this.move(0);
      }
    }, 3000);
  }

  _Slider.prototype.createBullets = function () {
    var _this = this;
    $.each(_this.$slides, function (index) {
      var $btn = $('<button class="slide-bullet">&bull;</button>');
      $btn.appendTo(_this.$slider.find('.slide-bullets'));
      $btn.on('click', function () {
        _this.move(index);
      });
      if (index == _this.currentIndex) {
        $btn.addClass('active');
      }
    });
  }

  _Slider.prototype.bindPrev = function () {
    var _this = this;
    this.$prevBtn.on('click', function () {
      if (_this.currentIndex == 0) {
        _this.move(_this.$slides.length - 1);
      } else {
        _this.move(_this.currentIndex - 1);
      }
    });
  }

  _Slider.prototype.bindNext = function () {
    var _this = this;
    this.$nextBtn.on('click', function () {
      if (_this.currentIndex == _this.$slides.length - 1) {
        _this.move(0);
      } else {
        _this.move(_this.currentIndex + 1);
      }
    });
  }

  return {
    init: function (slider) {
      new _Slider(slider);
    }
  }

})();

export default Slider;
// HTML
/*
<div class="slider">
  <div class="slide-viewer">
    <ul class="slide-group">
      <li class="slide">
        <a href="#"><img src=""></a>
      </li>
      <li class="slide">
        <a href="#"><img src=""></a>
      </li>
      <li class="slide">
        <a href="#"><img src=""></a>
      </li>
      <li class="slide">
        <a href="#"><img src=""></a>
      </li>
      <li class="slide">
        <a href="#"><img src=""></a>
      </li>
    </ul>
  </div>
  <div class="slide-btn slide-btn-prev">&lt;</div>
  <div class="slide-btn slide-btn-next">&gt;</div>
  <div class="slide-bullets"></div>
</div>
*/

// CSS
/*
.slider {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
}
.slide-viewer {
  overflow: hidden;
  height: 300px;
}
.slide-group {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
}
.slide:first-child {
  display: block;
}

.slide-btn {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  background-color: #fff;
  opacity: .1;
  cursor: pointer;
}
.slide-btn:hover {
  opacity: .3;
}
.slide-btn.slide-btn-prev {
  left: 5px; top: 50%;
  margin-top: -15px;
}
.slide-btn.slide-btn-next {
  right: 5px; top: 50%;
  margin-top: -15px;
}

.slide-bullets {
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 16px;
  text-align: center;
}
.slide-bullet {
  padding: 0 5px;
  border: none;
  background: none;
  font-size: 32px;
  line-height: .5;
  color: #fff;
  cursor: pointer;
}
.slide-bullet.active,
.slide-bullet:hover {
  color: darkslateblue;
}
*/