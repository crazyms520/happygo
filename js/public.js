
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
	$('.center').slick({
		autoplay: true,
  	autoplaySpeed: 2000,
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 3,
  	slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

});
