
$(document).ready(function() {
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
    //change the integers below to match the height of your upper div, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 100) {
        $('#nav_bar').addClass('navbar-fixed-top');
      }
  
      if ($(window).scrollTop() < 551) {
        $('#nav_bar').removeClass('navbar-fixed-top');
      }
    });
  });