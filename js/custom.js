$(function() {
    // Amount of scrolling before button is shown/hidden.
    var offset = 100;
  
    // Fade duration
    var duration = 500;
  
    // Toggle view of button when scrolling.
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('#c-go-top').fadeIn(duration);
      } else {
        $('#c-go-top').fadeOut(duration);
      }
    });
  
    // Scroll to top when button is clicked.
    $('#c-go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });
  });