import $ from 'jquery';

var Waterfall = (function () {

  function _Waterfall(container) {
    this.start = 0; // 图片起始索引位置
    this.picsPerRequest = 3; // 每次请求图片数量
    this.$picsWrap = container;
    this.$btn = container.siblings('.btn-load');
    this.$hiddenPic = container.find('.pic.hidden');

    this.picSrcStorage = [
      'radiohead1.jpg',
      'radiohead2.jpg',
      'radiohead3.jpg',
      'radiohead4.jpg',
      'radiohead5.jpg',
      'radiohead6.jpg',
      'radiohead7.jpg',
      'radiohead8.jpg',
      'radiohead9.jpg',
      'radiohead10.jpg',
      'radiohead11.jpg',
      'radiohead12.jpg'
    ];

    this.colLength = Math.floor(this.$picsWrap.width() / this.$hiddenPic.outerWidth(true));
    this.colHeightArr = [];
    for (var i = 0; i < this.colLength; i++) {
      this.colHeightArr[i] = 0;
    }

    this.getPicSrcs();
    this.bindBtnClick();
  }

  _Waterfall.prototype.getPicSrcs = function () {
    var picSrcs = this.picSrcStorage.slice(this.start * this.picsPerRequest, (this.start + 1) * this.picsPerRequest);
    if (picSrcs.length <= 0) {
      return;
    }
    var _this = this;
    $.each(picSrcs, function (index, picSrc) {
      var $pic = _this.createPicNode(picSrc);
      $pic.find('img').on('load', function () {
        $pic.appendTo(_this.$picsWrap);
        _this.renderWaterfall($pic);
      });
    });
    this.start++;
  }

  _Waterfall.prototype.bindBtnClick = function () {
    var _this = this;
    this.$btn.on('click', function () {
      _this.getPicSrcs();
      var picSrcs = _this.picSrcStorage.slice(_this.start * _this.picsPerRequest, (_this.start + 1) * _this.picsPerRequest);
      if (picSrcs.length <= 0) {
        _this.$btn.css('display', 'none');
      }
    });
  }

  _Waterfall.prototype.createPicNode = function (picSrc) {
    var htmlStr = [
      '<div class="pic"><img src="../img/lazyload/',
      picSrc,
      '"></div>'
    ].join('');
    var $pic = $(htmlStr);
    return $pic;
  }

  _Waterfall.prototype.renderWaterfall = function ($node) {
    var minHeight = Math.min.apply(null, this.colHeightArr);
    var minHeightIndex = this.colHeightArr.indexOf(minHeight);
    $node.css({
      top: minHeight + 'px',
      left: $node.outerWidth(true) * minHeightIndex + 'px'
    });
    this.colHeightArr[minHeightIndex] += $node.outerHeight(true);
    this.$picsWrap.height(Math.max.apply(null, this.colHeightArr)); // 手动撑开为 0 的父容器高度
  }

  return {
    init: function (container) {
      new _Waterfall(container);
    }
  }

})();

export default Waterfall;
