(function($, undefined) {

function isElementInViewport(el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top    >= 0 &&
    rect.left   >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right  <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

var script = {
  init : function() {
    this.slideSize = $('section').height();
    this.bind();
  },

  bind : function() {
    $('#slide-down').on('click', this.scrolLDown.bind(this));
    $(window).on('scroll', this.scroll.bind(this));
  },

  scrolLDown : function(e) {
    e.preventDefault();
    var currentSlide = parseInt($(window).scrollTop() / this.slideSize, 10) + 2;
    currentSlide = $('section.section-' + currentSlide);
    if(currentSlide.length) {
      $('html, body').animate({ scrollTop: currentSlide.offset().top }, 500);
    }
  },

  scroll : function(e) {
    $('.bar').each(function() {
      var bar = $(this).find('.progress-bar');
      if(isElementInViewport(bar) && bar.hasClass('not-loaded')) {
        setTimeout(function() {
          bar.removeClass('not-loaded').addClass('load');
        }, 500);
      }
    })
  }
};

$(document).ready(function() {
  script.init();
});

})(jQuery);
