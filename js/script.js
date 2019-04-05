$(document).ready(function() {
  $('.sandwich').click(function(){
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
    // var div2 = $("nav"); 
    // if (!div2.is(e.target) && (div2.hasClass('adaptive')) && div2.has(e.target).length === 0) { 
    //   $('nav').toggleClass('adaptive');
    //   $('.sandwich').toggleClass('close');
    // }
  });
  var $headerH = $('header').height();
  $('header').css('height', $headerH);

  $(window).on('scroll load', function () {
    if ($(document).scrollTop() > 5) {
      $(".main-header").addClass("fixed");
      $('.home-top').addClass('scrol');
      $('.baner .btn').addClass('btn-red');
    } else {
      $(".main-header").removeClass("fixed");
      $('.home-top').removeClass('scrol');
      $('.baner .btn').removeClass('btn-red')
    }
  });

  $('#form').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('#designe').load('https://van-ter.github.io/website-/form-blade.html');

  $('.sandwich').click(function(){
    $(this).toggleClass('close');
    $(this).closest('nav').toggleClass('adaptive');
  });
});
