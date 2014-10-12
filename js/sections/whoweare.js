$(document).ready(function(){
	
	//hash check when the page is reload
	var hashString = window.location.hash;
	if (hashString === '#whoweare') {
		$('.contentwhoweare p').css('opacity','0');
		$('.contentwhoweare p').fadeTo(2500,0.9);
	}else{};

	//button check when the button is clicked
	$('.menu').children('a').click(function(){
		var button = $(this).attr('href');
		if (button === "#whoweare") {
			$('.contentwhoweare p').css('opacity','0');
			$('.contentwhoweare p').fadeTo(2500,0.9); 
		}else{};
	});	
});


