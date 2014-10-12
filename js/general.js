$(document).ready(function(){

	var clickDone = false;
	var hashString = window.location.hash;
	
	var whoweare = $('#mainNav li:nth-child(1)');
	var privatetours = $('#mainNav li:nth-child(2)');
	var weektours = $('#mainNav li:nth-child(3)');
	var free = $('#mainNav li:nth-child(4)');
	var transfers = $('#mainNav li:nth-child(5)');
	var contact = $('#mainNav li:nth-child(6)');
	

	var iconsection = $('.menu');
	var iconmedia = $('.iconmedia');
	var iconlanguages = $('#show');

	var frontinfo1 = $('#firstinfo p:nth-child(3)');
	var frontinfo2 = $('#firstinfo p:nth-child(4)');
	var frontinfo3 = $('#firstinfo p:nth-child(5)');
	var frontinfo4 = $('#firstinfo p:nth-child(6)');



	//Main navegator refreshing document
	switch (hashString){
		case '#whoweare':
		whoweare.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#tours':
		privatetours.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#weektours':
		weektours.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#transfers':
		transfers.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#contact':
		contact.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		case '#free':
		free.children('a').css('color','#D48E12').attr('alt', 'selected');
		break;
		default:
		break;
		};
		

	//Main navegator
	iconsection.hover(
		function(){ 
			$(this).addClass('menuHover');
			$(this).children('a').animate({color :'#D48E12'}, 200);
			$(this).css('cursor','pointer');
			$(this).click(function(){
				window.location=$(this).children('a').attr('href');
				iconsection.children('a').css('color','#6a4709'); //Todos los demas enlaces vuelven a su color original
				$(this).children('a').css('color','#D48E12'); //Solo este enlace adopta el color de clikeado
				iconsection.children('a').attr('alt', 'unSelected'); // Todos los enlaces adoptan el atributo alt como "unSelected"
				$(this).children('a').attr('alt', 'selected');//solo el enlace clickado adopta el valor del atributo alt como "selected"
				clickDone = true;
			});
		},
		function(){ 
			$(this).removeClass('menuHover');
			if (clickDone){
				clickDone = false;
			}else{
				if ( $(this).children('a').attr('alt') === 'selected') {
				$(this).children('a').css('color','#D48E12');
				}else{
				$(this).children('a').animate({color :'#6a4709'}, 300); // En caso de no haber clickeado, vuelve a su color original
				};
			};
		}
	);

	//Social Media buttons
	iconmedia.hover(
		function(){
			$(this).find('img').animate({backgroundColor :'#D48E12'}, 200);
		},
		function(){
			$(this).find('img').animate({backgroundColor :'#F7F4D1'}, 200);
		});

	//Languages
	iconlanguages.mouseenter(function(){
		$(this).css('cursor','pointer');
		$(this).children('p').animate({color:'#D48E12'},200)
    });
    iconlanguages.mouseleave(function(){
    	$(this).children('p').animate({color:'#F7F4D1'},300)
    });
    iconlanguages.click(function(){
       		$('#languages').slideToggle('slow');
    });

    
    //Front
    var i = 1; //counter one
    $('#firstinfo p:nth-child(3)').show(0);
    $.timer(4000, function(temporizador){
    	i++;
       		if ( i < 5 ){
       			$('#firstinfo p:nth-child('+ (1+i) +')').fadeOut(500);
       			$('#firstinfo p:nth-child('+ (2+i) +')').show(500);
    		}else{ 
    			$('#firstinfo p:nth-child(6)').fadeOut(500);
    			$('#firstinfo p:nth-child(3)').show(500);
    			i=1;
    		};
    	/**$('#firstinfo p a').hover(
		function(){
			temporizador.stop();
		},
		function(){
			temporizador.reset(4000);
		});**/
	});

	//Main navegator from home
	frontinfo1.click(function(){
		privatetours.children('a').animate({color :'#D48E12'}, 1000).attr('alt', 'selected');
	});
	frontinfo2.click(function(){
		weektours.children('a').animate({color :'#D48E12'}, 1000).attr('alt', 'selected');
	});
	frontinfo3.click(function(){
		transfers.children('a').animate({color :'#D48E12'}, 1000).attr('alt', 'selected');
	});
	frontinfo4.click(function(){
		free.children('a').animate({color :'#D48E12'}, 1000).attr('alt', 'selected');
	});

    //Footer
	$('.additionalinformation').mouseenter(function(){
		$(this).css('cursor','pointer');
		$(this).click(function(){
			window.location=$(this).find('a').attr('href');
			iconsection.children('a').css('color','#6a4709'); //Todos los demas enlaces vuelven a su color original
			iconsection.children('a').attr('alt', 'unSelected'); // Todos los enlaces adoptan el atributo alt como "unSelected"
		});
	});

});


/**Front
    var i = 0; //counter one
    $.timer(4000, function(temporizador){
        i++;
            if ( i < 5 ){
                if ( i === 1 ){
                    $('#firstinfo p:nth-child('+ (2+i) +')').show(500);
                }else{
                    $('#firstinfo p:nth-child('+ (1+i) +')').fadeOut(500);}
                    $('#firstinfo p:nth-child('+ (2+i) +')').show(500);
            }else{ 
                $('#firstinfo p:nth-child(6)').fadeOut(500);
                $('#firstinfo p:nth-child(3)').show(500);
                i=1;
            };
        $('#firstinfo p a').hover(
        function(){
            temporizador.stop();
        },
        function(){
            temporizador.reset(4000);
        });
    });**/





