$(document).ready(function(){
	
	//hash check when the page is reload
	var hashString = window.location.hash;
	if (hashString === '#transfers') {
		$('.contenttransfers h1').css('opacity','0');
		$('.contenttransfers p').css('opacity','0');
		$('.contenttransfers table').css('opacity','0');
		$('.contenttransfers h1').fadeTo(2000,0.9);
		$('.contenttransfers p').fadeTo(2000,0.9);
		$('.contenttransfers table').fadeTo(2000,0.9);
	}else{};

	//button check when the button is clicked
	$('.menu').children('a').click(function(){
		var button = $(this).attr('href');
		if (button === "#transfers") {
			$('.contenttransfers h1').css('opacity','0');
			$('.contenttransfers p').css('opacity','0');
			$('.contenttransfers table').css('opacity','0');
			$('.contenttransfers h1').fadeTo(2000,0.9);
			$('.contenttransfers p').fadeTo(2000,0.9);
			$('.contenttransfers table').fadeTo(2000,0.9);
		}else{};
	});	
});
