$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#main-menu').addClass('scroll');
    } else {
      $('#main-menu').removeClass('scroll');
    }
  });

  $('#main-menu').on('show.bs.collapse', function() {
    $('#main-menu').addClass('scroll-m');
  });
  $('#main-menu').on('hidden.bs.collapse', function() {
    $('#main-menu').removeClass('scroll-m');
  });
});
