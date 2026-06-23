// ===== スクロールパフォーマンス用の記述　PageSpeed Insights対応 =====
jQuery.event.special.touchstart = {
  setup: function (e, t, s) {
    t.includes("noPreventDefault")
      ? this.addEventListener("touchstart", s, { passive: !1 })
      : this.addEventListener("touchstart", s, { passive: !0 });
  }
};
jQuery.event.special.touchmove = {
  setup: function (e, t, s) {
    t.includes("noPreventDefault")
      ? this.addEventListener("touchmove", s, { passive: !1 })
      : this.addEventListener("touchmove", s, { passive: !0 });
  }
};
jQuery.event.special.wheel = {
  setup: function (e, t, s) {
    this.addEventListener("wheel", s, { passive: !0 });
  }
};
jQuery.event.special.mousewheel = {
  setup: function (e, t, s) {
    this.addEventListener("mousewheel", s, { passive: !0 });
  }
};



// ===== スムーススクロール =====
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 800; // ミリ秒

    // アンカーの値取得
    var href = $(this).attr("href");

    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);

    // 移動先を数値で取得
    var offset = 0;
    if (href === "#link07" && window.innerWidth > 767) {
      offset = 700; // PCだけ下げる。数値は微調整
    }
    var position = target.offset().top + offset;

    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});



// ===== 電話番号リンク =====
$(function () {
  var device = navigator.userAgent;
  if (
    (device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) ||
    device.indexOf('iPod') > 0 ||
    device.indexOf('Android') > 0
  ) {
    $(".sp-tel-link").wrap('<a href="tel:012000000000"></a>');
  }
});



// ===== メニュー開閉 =====
$(function () {
  var $pcModal = $("#pc-modal-menu");
  var $spModal = $("#sp-modal-menu");

  function activeModal() {
    return window.innerWidth > 767 ? $pcModal : $spModal;
  }

  $(".menu-open").on("click", function () {
    activeModal().fadeIn();
  });

  $("#pc-modal-menu .closebtn").on("click", function () {
    $pcModal.fadeOut();
  });

  $("#sp-modal-menu .closebtn").on("click", function () {
    $spModal.fadeOut();
  });

  $("#pc-modal-menu a, #sp-modal-menu a").on("click", function () {
    activeModal().fadeOut();
  });
});