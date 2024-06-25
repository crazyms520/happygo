
$(function() {
	// 跑馬燈
	$('.marquee.top-marquee').slick({
    speed: 18000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });

	// search btn
  document.addEventListener("touchstart", function(){}, true);

  // 黃金大Banner
  var swiper = new Swiper(".mySwiper", {
  	autoplay: {
   	  delay: 3000,
 		},
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    freeMode: true,
    pagination: {
      el: ".mySwiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {   
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        slidesPerGroup: 3,
      },
    }
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
	// $('.center').slick({
	// 	// autoplay: true,
  // 	// autoplaySpeed: 2000,
	//   centerMode: true,
	//   centerPadding: '0',
	//   slidesToShow: 3,
  // 	slidesToScroll: 1,
	//   responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         arrows: false,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     }
	//   ]
	// });

  // 跑馬燈關閉
  $('.mobile-marquee-close').on('click', function(){
    $('.marquee-wrapper').remove();
  });

});
