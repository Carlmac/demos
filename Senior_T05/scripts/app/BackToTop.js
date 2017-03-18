import $ from 'jquery';

var BackToTop = (function () {

  function _BackToTop(btn) {
    this.btn = btn;
    this.bindBtnClick();
    this.bindWindowScroll();
  }

  _BackToTop.prototype.toggleBtn = function () {
    if (this.isBottom()) {
      this.btn.css('display', 'block');
    } else {
      this.btn.css('display', 'none');
    }
  }

  _BackToTop.prototype.isBottom = function () {
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var documentHeight = $(document).height();

    if (windowScrollTop >= (documentHeight - windowHeight - 2000)) {
      return true;
    } else {
      return false;
    }
  }

  _BackToTop.prototype.bindBtnClick = function () {
    this.btn.click(function () {
      $(window).scrollTop(0);
    });
  }

  _BackToTop.prototype.bindWindowScroll = function () {
    var _this = this;
    $(window).scroll(function () {
      _this.toggleBtn();
    });
  }

  return {
    init: function (btn) {
      new _BackToTop(btn);
    }
  }

})();

export default BackToTop;