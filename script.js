let  swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 3,

	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });