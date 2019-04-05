$(document).ready(function() {
  $('.item').magnificPopup({
    type: 'ajax',
    ajax: {
      settings: null,
      cursor: 'ajax-loading',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    }
  });

  $('.sandwich').click(function(){
    $(this).toggleClass('close');
    $('nav').toggleClass('adaptive');
  });

  $('.i-search').click(function(){
    if($(this).hasClass('search-false')){
      $(this).removeClass('search-false')
      $(this).parent('.wrapper-search').addClass('show-search')
    }
  });

  $(document).mouseup(function (e){ 
    var div = $(".i-search, input"); 
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
      $(".i-search").addClass('search-false')
      $(".i-search").parent('.wrapper-search').removeClass('show-search')
    }
  });
  var $headerH = $('header').height();
  $('header').css('height', $headerH);

  $(window).on('scroll load', function () {
    if ($(document).scrollTop() > 5) {
      $(".main-header").addClass("fixed");
      $('.baner .block-red').addClass('red-liner');
    } else {
      $(".main-header").removeClass("fixed");
      $('.baner .block-red').removeClass('red-liner')
    }
  });
});
