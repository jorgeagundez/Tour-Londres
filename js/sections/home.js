$(document).ready(function(){
    var i = 1; //counter one
    $('#home img:nth-child(1)').fadeIn(0);
    $.timer(4000, function(temporizador){
        i++;
            if ( i < 10 ){
                $('#home img:nth-child('+ (i-1) +')').fadeOut(1000);
                $('#home img:nth-child('+ i +')').fadeIn(500);
            }else{ 
                $('#home img:nth-child('+ (i-1) +')').fadeOut(500);
                $('#home img:nth-child(1)').fadeIn(1000);
                i=1;
            };  
    });
});


