$(document).ready(function(){
  $('.slider').slick({
    	arrows : false,
    	dots : true,
    	dotsClass : 'myDots'
  });

  $(window).scroll(function(){

	var fix = $('.fix-block')

	if($(this).scrollTop() > 700){
		fix.addClass('fix')
	}
	else{
		fix.removeClass('fix')
	}
})

  $('.tatto-gallery').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
	});
  var drop = document.querySelector('.drop');

drop.addEventListener('click', function(){
	var top = document.querySelector('.top-line');
	var bot = document.querySelector('.bot-line');
	var menu = document.querySelector('.menu');
	var call = document.querySelector('.call');

	top.classList.toggle('move-top')
	bot.classList.toggle('move-bot')
	menu.classList.toggle('show')
	call.classList.toggle('show')
})
});





