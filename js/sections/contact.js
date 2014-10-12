$(document).ready(function(){
	
	//hash check when the page is reload
	var hashString = window.location.hash;
	if (hashString === '#contact') {
		$('.contentcontact p').css('opacity','0');
		$('.contentcontact p').fadeTo(2000,0.9);
	}else{};

	//button check when the button is clicked
	$('.menu').children('a').click(function(){
		var button = $(this).attr('href');
		if (button === "#contact") {
			$('.contentcontact p').css('opacity','0');
			$('.contentcontact p').fadeTo(2000,0.9); 
		}else{};
	});	
});
