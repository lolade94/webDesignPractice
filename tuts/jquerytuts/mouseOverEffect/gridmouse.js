$(document).ready(function(){

$(function(){
 //call mouseover function
	$("div").mouseover(function(){
 //body
 
 //all divs styling of opacity of .65
		$("div").css({opacity:".65"});
 //on mouseover 1 div element made to be clear
		$(this).css({opacity:1}).mouseout(function(){
           //mouse away all div elements are clear to full color
				$("div").css({opacity:1});
			
			
			});//mouseout function
 
		});//mouseover function
		
	});//main function

});//document