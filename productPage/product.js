$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },

});

$('#owl-carousel').owlCarousel({


    navigation : false,
    navigationText : ["<",">"],

});



var totWidth=0;
var positions=  new Array();


$('#slides .slide').each(function(i){

positions[i]=totWidth;
totWidth+= $(this).innerWidth();

if(!$(this).width())
{
 alert("please, fill in width & height for all images");
 return false;
 
}


});

$('#slides').width(totWidth + 1500 );

$('.thumb-prev ul li a').click(function(e){
$('li.thumb').removeClass('act').addClass('inact');
$(this).parent().addClass('act');

var pos =$(this).parent().prevAll('.thumb').length;
// WHAT?

$('#slides').stop().animate({marginLeft:-positions[pos] +'px'},450);
//start the sliding animation

e.preventDefault();
//prevent default action link

});

$('.thumb-prev ul li.thumb:first').addClass('act').siblings().addClass('inact');
//on page load mark first thumb nail as active



});