$(document).ready(function(){

var totWidth=0;
var position= new Array();

$("#slides .slide").each(function(i){
//loop through all the slides total width
position[i]= totWidth;
//add each with to get total
totWidth+= $(this).width();

	if(!$(this).width)
		{
			alert("Please fill width and height of image");
			return false;
		}

});

//store total width
$("#slides").width(totWidth);

$('#navlinks ul li a').click(function(e){
		
		/* on thumbnail click*/
		$('li.item').removeClass('act').addClass('inact');
		//parent of list item is ul element
		$(this).parent().addClass('act');
		
		var pos= $(this).parent().prevAll('.item').length;
		
		//start sliding 
		$('#slides').stop().animate({marginLeft:-position[pos]+ 'px'}, 450);
		
		e.preventDefault();
		//prevent default action link


});

//mark first thumbnail

$('#navlinks ul li.item:first ').addClass('act').siblings().addClass('inact');

});