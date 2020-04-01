import jQuery from "jquery";
import "slick-carousel";

const $ = jQuery;
console.log("read jQuery File!");

$(function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  });

  $(".header__toggle, .nav__cover").on("click", function() {
    $(".header__toggle, .nav, .toggle__icon, .nav__cover").toggleClass("show");
  });

  // 少しスクロールするとトップへスクロールするボタンが現れる
  var scrollBtn = $("#js-pageReverse");
  // scrollBtn.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      scrollBtn.addClass("js-scrollIn");
    } else {
      scrollBtn.removeClass("js-scrollIn");
    }
  });
  // ボタンを押すとトップへスクロール
  scrollBtn.click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      300,
      "linear"
    );
    return false;
  });
});
