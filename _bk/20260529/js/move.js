// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

// ふわっ
function isMobile() {return $(window).width() <= 768;}
$('.fadeUpTrigger').each(function() {
  var elemTop = $(this).offset().top;
  var elemHeight = $(this).height();
  var elemBottom = elemTop + elemHeight;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowBottom = scroll + windowHeight;
  // 要素がどれだけウィンドウ内に表示されているかの計算
  var elemVisibleTop = Math.max(elemTop, scroll);
  var elemVisibleBottom = Math.min(elemBottom, windowBottom);
  var elemVisibleAmount = (elemVisibleBottom - elemVisibleTop) / elemHeight;
  if (isMobile()) {
      // スマホの場合、要素の40%以上が表示されていれば発火
      if (elemVisibleAmount >= 0.4) {
          $(this).addClass('fadeUp');
      }
  } else {
      // PCの場合、40%以上が表示されていれば発火
      if (elemVisibleAmount >= 0.4) {
          $(this).addClass('fadeUp');
      }
  }
});

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
