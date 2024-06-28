
$(function() {
  $('.bg-mainColor-mobile .nav-item').on('click', function(){
    let target = $(this).find('.nav-link').attr('data-bs-target')

    if($('.section-banner').is(':visible') && $(target).is(':visible')) {
      $('.section-banner').hide();
    } else {
      $('.section-banner').show(); 
    }
    
    console.log(target);
    console.log($(target).is(':visible'))
  });
});
