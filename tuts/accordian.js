$(document).ready(function(){

$(function(){


$(".expand").on('click', function(){

$(this).next().slideToggle(200);
 $expand=$(this).find(">:first-child");
 
	if($expand.text()=="+")
	{
     $expand.text("x");
	}
	else{
		$expand.text("+");
		}

		});//click function

	}); //main function

});//document