
// transparent header on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.trans-before').addClass('trans-after');
    } else {
      $('.trans-before').removeClass('trans-after');
    }
  });

//auto close collapse on click
function close_toggle() {
  if ($(window).width() <= 768) {
    $('.navbar-collapse a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
  }
  else {
   $('.navbar .navbar-default a').off('click');
  }
}
close_toggle();
$(window).resize(close_toggle);

/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//parallax
$(window).stellar({
    horizontalScrolling: false,
    responsive: true/*,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0*/
});

//owl carousel for work
$(document).ready(function() {

  $("#work-carousel").owlCarousel({
      // Most important owl features
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true
  });

});

/*========tooltip and popovers====*/
/*==========================*/
$("[data-toggle=popover]").popover();
$("[data-toggle=tooltip]").tooltip();
