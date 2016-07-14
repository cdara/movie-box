(function() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  $(document).ready(function() {

    //Header navbar on scroll background black
    var scroll_pos = 0;
    var filx_scroll = $('#flixhome');
    var flix_nav = filx_scroll.offset();
    $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > flix_nav.top) {
        $('#flix-navbar').css('background-color', '#000000');
      } else {
        $('#flix-navbar').css('background-color', 'transparent');
      }
    });

    //movieflix plans logo on click

    $("#cancel-anytime-logo").css('-webkit-filter', 'grayscale(0%)');
    $("#any-device-info").hide();
    $("#price-info").hide();

    $("#any-device").click(function() {
      $("#any-device-logo").css('-webkit-filter', 'grayscale(0%)');
      $("#cancel-anytime-logo").css('-webkit-filter', 'grayscale(100%)');
      $("#price-logo").css('-webkit-filter', 'grayscale(100%)');

      $("#any-device-info").show();
      $("#cancel-anytime-info").hide();
      $("#price-info").hide();

      //onclick scroll
      $('html, body').animate({
        scrollTop: $("#see-plans").offset().top
      }, 1000);

    });

    $("#price").click(function() {
      $("#price-logo").css('-webkit-filter', 'grayscale(0%)');
      $("#any-device-logo").css('-webkit-filter', 'grayscale(100%)');
      $("#cancel-anytime-logo").css('-webkit-filter', 'grayscale(100%)');
      $("#price-info").show();
      $("#cancel-anytime-info").hide();
      $("#any-device-info").hide();

      //onclick scroll
      $('html, body').animate({
        scrollTop: $("#see-plans").offset().top
      }, 1000);

    });

    $("#cancel-anytime").click(function() {
      $("#cancel-anytime-logo").css('-webkit-filter', 'grayscale(0%)');
      $("#price-logo").css('-webkit-filter', 'grayscale(100%)');
      $("#any-device-logo").css('-webkit-filter', 'grayscale(100%)');
      $("#cancel-anytime-info").show();
      $("#any-device-info").hide();
      $("#price-info").hide();

      //onclick page scroll up
      $('html, body').animate({
        scrollTop: $("#see-plans").offset().top
      }, 1000);

    });

  });
})();
