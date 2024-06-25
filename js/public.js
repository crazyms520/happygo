
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
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
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

});
