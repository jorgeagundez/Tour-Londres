$(document).ready(function(){
	var hashString = window.location.hash;
	
	//hash check when the page is reload
	if (hashString === '#oldcity' || hashString === '#westminster' || hashString === '#darklondon' || hashString === '#soho' || hashString === '#historicpubs' || hashString === '#southwark' || hashString === '#harrypotter' ) {
		$('#back').animate({zIndex:'0'},1000);
		$('#home').animate({zIndex:'-2'},1000);
		$('#tourNav').animate({zIndex:'2'},1000);
		$('#tourNav').animate({opacity:'0.95'},1000);
	}else{};

	//appear the tour Navegator
	$('#tours a').click(function(){
		if ($(this).attr('alt') === 'about') { 
			$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		}else{
			$('#back').animate({zIndex:'0'},1000);
			$('#home').animate({zIndex:'-2'},1000);
			$('#tourNav').animate({zIndex:'2'},1000);
			$('#tourNav').animate({opacity:'0.95'},1000);
			var whichTour = $(this).attr('href');
			switch (whichTour){
			case '#oldcity':
			$('#tourNav li:nth-child(1)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#westminster':
			$('#tourNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#darklondon':
			$('#tourNav li:nth-child(3)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#soho':
			$('#tourNav li:nth-child(4)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#historicpubs':
			$('#tourNav li:nth-child(5)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#southwark':
			$('#tourNav li:nth-child(6)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			case '#harrypotter':
			$('#tourNav li:nth-child(7)').children('a').css('color','#D48E12').attr('alt', 'selected');
			break;
			default:
			break;
			}
		};
	});

	//disapeear the tour Navegator and all animations
	$('#mainNav').find('a').click(function(){
		$('#home').css('zIndex','0');
		$('#back').css('zIndex','-2');
		$('#tourNav').animate({zIndex:'-1'},1500).animate({opacity:'0'},1000);
		$('#tourNav').find('a').animate({color :'#F7F4D1'}, 500);

	});
	$('.additionalinformation').find('a').click(function(){
		$('#home').css('zIndex','0');
		$('#back').css('zIndex','-2');
		$('#tourNav').animate({zIndex:'-1'},1500).animate({opacity:'0'},1000);
		$('#tourNav').find('a').animate({color :'#F7F4D1'}, 500);

	});

	//Tour Main navegator refreshing document
	switch (hashString){
		case '#about':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#privatetoursconditions':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#prices':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#weektoursconditions':
		$('#mainNav li:nth-child(3)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#oldcity':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(1)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#westminster':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#darklondon':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(3)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#soho':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(4)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#historicpubs':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(5)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#southwark':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(6)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#harrypotter':
		$('#mainNav li:nth-child(2)').children('a').css('color','#D48E12').attr('alt', 'selected');
		$('#tourNav li:nth-child(7)').children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		default:
		break;
		}

	//Tour navegator
	var clickDone = false;
	$('.tourmenu').hover(
		function(){ 
			$(this).animate({backgroundColor :'#383534'}, 200);
			$(this).children('a').animate({color :'#D48E12'}, 200);
			$(this).css('cursor','pointer');
			$(this).click(function(){
				window.location=$(this).children('a').attr('href');
				$('.tourmenu').children('a').css('color','#F7F4D1'); //Todos los demas enlaces vuelven a su color original
				$(this).children('a').css('color','#D48E12'); //Solo este enlace adopta el color de clikeado
				$('.tourmenu').children('a').attr('alt', 'unSelected'); // Todos los enlaces adoptan el atributo alt como "unSelected"
				$(this).children('a').attr('alt', 'selected');//solo el enlace clickado adopta el valor del atributo alt como "selected"
				clickDone = true;
			});
		},
		function(){ 
			$(this).animate({backgroundColor :'#231F1E'}, 200);
			if (clickDone){
				clickDone = false;
			}else{
				if ( $(this).children('a').attr('alt') === 'selected') {
				$(this).children('a').css('color','#D48E12');
				}else{
				$(this).children('a').animate({color :'#F7F4D1'}, 300); // En caso de no haber clickeado, vuelve a su color original
				};
			};
		}
	);

	//Weekly Tours meeting point info
	$('#weektours').find('a').click(function(){
		$('.meetingpoint').animate({width : '25%'},2500, function() { $('.meetingpoint img').fadeTo('slow',1) });
	});
	//Desappear Tours meeting point info
	$('#mainNav').find('a').click(function(){
		$('.meetingpoint').animate({width : '0%'},500, function() { $('.meetingpoint img').fadeTo('fast',0) });
	});
	$('.additionalinformation').find('a').click(function(){
		$('.meetingpoint').animate({width : '0%'},500, function() { $('.meetingpoint img').fadeTo('fast',0) });
	});
});

