$(document).ready(function(){
    $('#portfolio-flters li').click(function(){
      var filter = $(this).data('filter');
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');
      
      if (filter == '*') {
        $('.work__box:visible').fadeOut(400);
        setTimeout(function() {
          $('.work__box').fadeIn(400);
        }, 400);
      } else {
        $('.work__box').not(filter).filter(':visible').fadeOut(400);
        $(filter).fadeIn(400);
      }
    });
  });
  