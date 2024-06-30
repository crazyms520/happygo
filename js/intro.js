
$(function() {
  $('.collapse').on('shown.bs.collapse', function(event) {
    let target = $(event.target);
    console.log(target.attr('id'));
    
    $(`.collapse.show:not(#${target.attr('id')})`).collapse('hide');
    // console.log(event);
    
    $('.section-banner').hide();
  })

  $('.collapse').on('hide.bs.collapse', function(event) {

    // console.log($(this));
    // $(this).removeClass('show');
    $('.section-banner').show();
  })

  $(document).click(function(event) {
    if (!$(event.target).is(".bg-mainColor-mobile *, .tab-content *")) {
      $('.collapse').collapse('hide');
    }
});
});
