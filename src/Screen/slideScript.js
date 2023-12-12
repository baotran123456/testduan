
import $ from 'jquery';

imgIndex = 1 
var current = $('.flex--active').data('slide'),

next = $(this).data('slide'); 

function nextImage() {
  imgIndex++
  if(imgIndex > 4){
    imgIndex = 1

  }
  $('.slider__warpper').find('.flex__container[data-slide=' + imgIndex + ']').addClass('flex--preStart');
  $('.flex--active').addClass('animate--end');
  setTimeout(function() {
    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  }, 800);
}

window.onload = function () {

  setInterval(nextImage, 3000);

}

$('.slide-nav').on('click', function(e) {
    e.preventDefault();

    // var current = $('.flex--active').data('slide'),
    //   next = $(this).data('slide'); 
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
  
    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }

  });