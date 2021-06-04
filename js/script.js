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
				$('.dropdown').removeClass('active');
				$('body').removeClass('overflow-menu');
				$('body').addClass('body');
			}, 500)
		} else {
			$('.main-menu-absolute').addClass('active');
			$('.main-menu-absolute').addClass('fixed');
			$('body').addClass('overflow-menu');
		}
	});
	$('.dropdown').on("click", function () {
		if ($('.dropdown').hasClass('active')) {
			$('.dropdown').removeClass('active');
			setTimeout(function() {
				$(this).addClass('active');
			},1)
			$(this).addClass('active');
		} else {
			$(this).addClass('active');
		}
	});
});
