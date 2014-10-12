$(document).ready(function(){
	
	//hash check when the page is reload
	var hashString = window.location.hash;
	if (hashString === '#free') {
		$('.contentfree table').css('opacity','0');
		$('.contentfree p').css('opacity','0');
		$('.contentfree table').fadeTo(2000,0.9);
		$('.contentfree p').fadeTo(2000,0.9);
	}else{};

	//button check when the button is clicked
	$('.menu').children('a').click(function(){
		var button = $(this).attr('href');
		if (button === "#free") {
			$('.contentfree table').css('opacity','0');
			$('.contentfree p').css('opacity','0');
			$('.contentfree table').fadeTo(2000,0.9);
			$('.contentfree p').fadeTo(2000,0.9); 
		}else{};
	});	
});
