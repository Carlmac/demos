define(["jquery"],function(e){var t=function(){function t(e){this.currentIndex=0,this.timer,this.$slider=e,this.$slides=this.$slider.find(".slide"),this.$group=this.$slider.find(".slide-group"),this.$prevBtn=this.$slider.find(".slide-btn-prev"),this.$nextBtn=this.$slider.find(".slide-btn-next"),this.createBullets(),this.bindPrev(),this.bindNext(),this.autoMove()}return t.prototype.move=function(e){var t=this;this.autoMove();var i,n;this.$group.is(":animated")||e==this.currentIndex||(this.$slider.find(".slide-bullet").eq(t.currentIndex).removeClass("active"),this.$slider.find(".slide-bullet").eq(e).addClass("active"),e>this.currentIndex?(i="100%",n="-100%"):(i="-100%",n="100%"),this.$slides.eq(e).css({display:"block",left:i}),this.$group.animate({left:n},function(){t.$slides.eq(t.currentIndex).css({display:"none"}),t.$slides.eq(e).css({left:0}),t.$group.css({left:0}),t.currentIndex=e}))},t.prototype.autoMove=function(){clearTimeout(this.timer);var e=this;this.timer=setTimeout(function(){e.currentIndex<e.$slides.length-1?e.move(e.currentIndex+1):e.move(0)},3e3)},t.prototype.createBullets=function(){var t=this;e.each(t.$slides,function(i){var n=e('<button class="slide-bullet">&bull;</button>');n.appendTo(t.$slider.find(".slide-bullets")),n.on("click",function(){t.move(i)}),i==t.currentIndex&&n.addClass("active")})},t.prototype.bindPrev=function(){var e=this;this.$prevBtn.on("click",function(){0==e.currentIndex?e.move(e.$slides.length-1):e.move(e.currentIndex-1)})},t.prototype.bindNext=function(){var e=this;this.$nextBtn.on("click",function(){e.currentIndex==e.$slides.length-1?e.move(0):e.move(e.currentIndex+1)})},{init:function(e){new t(e)}}}();return t});