	$(document).ready(function(){

		$('.bxslider').bxSlider({
			auto: true,
			mode: 'fade',
			captions: true,
			slideWidth: 960
		});
		
		$('.scrolling-slider-inner').bxSlider({
			slideWidth: 1240,
			minSlides: 7,
			maxSlides: 7,
			slideMargin: 4
		});		

		$(function(){
			$.superbox.settings = {
				closeTxt: '<img src="img/close.png" alt="" />',
				loadTxt: "Загрузка...",
				nextTxt: "Вперед",
				prevTxt: "Назад"
			};
			$.superbox();
		});	

		$('.slide > img').mouseover(function(){
			var src = $(this).attr('rel');
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			var screenWidth = $(window).width();
			
			$('#hidden-img img').hide();
			$('#hidden-img img').attr('src', src);
			$('#hidden-img').css({'left': left+'px', 'top': top+'px'}).show();
			$('#hidden-img img').fadeIn('slow');
			
			var imgWidth = $('#hidden-img img').width();
			
			if((screenWidth/2 + 1240/2 - imgWidth) < left)
			{
				$('#hidden-img').css('left', screenWidth/2 + 1240/2 - imgWidth - 71);
			}
			
		});
		$('#hidden-img').hover(function(){
			// do nothing
		}, function() {
			
			$('#hidden-img').hide();

			var left = $('#hidden-img').offset().left;
			var top = $('#hidden-img').offset().top;			
			var imgWidth = $('#hidden-img img').width();
			var screenWidth = $(window).width();
			
			if((screenWidth/2 + 1240/2 - imgWidth) < left)
			{
				$('#hidden-img').css('left', screenWidth/2 + 1240/2 - imgWidth - 71);
			}			
			
		});
	
		/*** Dropdown menu ***/
		$('#yam-menu-top').superfish();
		$('#yam-menu-left').superfish();
	
	});