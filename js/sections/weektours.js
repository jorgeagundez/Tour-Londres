$(document).ready(function(){
	
	var parrafo = $('.contentweektours p');
	var tabla = $('.contentweektours td');
	var titulo = $('.contentweektours h1');
	
	//hash check when the page is reload
	var hashString = window.location.hash;
	if (hashString === '#reservations') {
		parrafo.css('opacity','0').fadeTo(2000,0.9);
		tabla.css('opacity','0').fadeTo(2000,0.9);
		titulo.css('opacity','0').fadeTo(2000,0.9);
	}else{};

	//button check when the button is clicked
	$('.menu').children('a').click(function(){
		var button = $(this).attr('href');
		if (button === "#weektours") {
			parrafo.css('opacity','0').fadeTo(2000,0.9);
			tabla.css('opacity','0').fadeTo(2000,0.9).find('img:nth-child(2)').css('opacity','0');
			titulo.css('opacity','0').fadeTo(2000,0.9);
		}else{};
	});	

});
