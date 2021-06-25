$(document).ready(function(){

"use strict";

    $('.slider-home').slick({
          infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
		  autoplay: true,
		  autoplaySpeed: 3000,
    });

	$('.tabs').on('click','a',function(e){
	  e.preventDefault();
	  var tabId = $(this).attr('data-tab');
	  $(this).closest('.tabs').find('a').removeClass('active');
	  $(this).addClass('active');
	  $('.tab-panel').removeClass('active');
	  $('#'+tabId).addClass('active');
	});

	$('.navbar-toggler').on("click", function () {
		if ($( ".main-menu-absolute" ).hasClass('active')) {
			setTimeout(function() {
				$('.main-menu-absolute').removeClass('active');
				$('.main-menu-absolute').removeClass('fixed');
				$('body').removeClass('overflow-menu');
				$('body').addClass('body');
			}, 500)
			$('.dropdown').removeClass('active');
		} else {
			$('.main-menu-absolute').addClass('active');
			$('.main-menu-absolute').addClass('fixed');
			$('body').addClass('overflow-menu');
		}
	});
	$(document).ready(function(){
		if(window.matchMedia("(max-width: 767px)").matches){
			// The viewport is less than 768 pixels wide
			$('.dropdown').on("click", function () {
				if (!$(this).hasClass('active')) {
					$('.dropdown').removeClass('active');
					$(this).addClass('active');
				}
				else  {
					$('.dropdown').removeClass('active');
				}
			});
		}
	});
});
