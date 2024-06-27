
$(function() {
	// 控制開關
	$('.pageNav-sec').on('click', function(){
		$('.pageNav-sec-box').toggle();
		$(this).toggleClass('active-sec');
	})
});
