define(["jquery"],function(n){var t=function(){function t(n){this.btn=n,this.bindBtnClick(),this.bindWindowScroll()}return t.prototype.toggleBtn=function(){this.isBottom()?this.btn.css("display","block"):this.btn.css("display","none")},t.prototype.isBottom=function(){var t=n(window).height(),i=n(window).scrollTop(),o=n(document).height();return i>=o-t-2e3},t.prototype.bindBtnClick=function(){this.btn.click(function(){n(window).scrollTop(0)})},t.prototype.bindWindowScroll=function(){var t=this;n(window).scroll(function(){t.toggleBtn()})},{init:function(n){new t(n)}}}();return t});