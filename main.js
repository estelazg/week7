import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

// 引入 Swiper core 與樣式
import Swiper from "swiper";
import "swiper/css";

// 如果要用 Pagination、Navigation
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 初始化 Swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    modules: [Pagination, Navigation, Autoplay], // 記得加上要用的功能
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
});
