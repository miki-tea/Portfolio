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
});
