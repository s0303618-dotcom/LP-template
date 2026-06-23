// スクロールパフォーマンス用の記述　PageSpeed Insights対応
jQuery.event.special.touchstart={setup:function(e,t,s){t.includes("noPreventDefault")?this.addEventListener("touchstart",s,{passive:!1}):this.addEventListener("touchstart",s,{passive:!0})}},jQuery.event.special.touchmove={setup:function(e,t,s){t.includes("noPreventDefault")?this.addEventListener("touchmove",s,{passive:!1}):this.addEventListener("touchmove",s,{passive:!0})}},jQuery.event.special.wheel={setup:function(e,t,s){this.addEventListener("wheel",s,{passive:!0})}},jQuery.event.special.mousewheel={setup:function(e,t,s){this.addEventListener("mousewheel",s,{passive:!0})}};

$(function(){
// #で始まるアンカーをクリックした場合に処理

$('a[href^="#"]').click(function() {
// スクロールの速度
var speed = 800; // ミリ秒
// アンカーの値取得
var href= $(this).attr("href");
// 移動先を取得
var target = $(href == "#" || href == "" ? 'html' : href);
// 移動先を数値で取得
var position = target.offset().top;
// スムーススクロール
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});


$(function(){
var device = navigator.userAgent;
if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0){
$(".sp-tel-link").wrap('<a href="tel:012000000000"></a>');
}
});

// $(function(){
// objectFitImages('.fit img');
// });
// $(function(){
// objectFitImages('.wp-block-image img');
// });

$(function ($) {
    //sp menu
    $(".h-menu").on("click", function () {
      $('#sp-global-nav').fadeIn();
    });
  
    $(".closebtn").on("click", function () {
      $('#sp-global-nav').fadeOut();
    });
  
    // SPメニュー内の全リンクをクリックしたらメニューを閉じる
    $("#sp-global-nav a").on("click", function () {
      $('#sp-global-nav').fadeOut();
    });
  });