$(document).ready(function(){


$("p").each(function(i){

$(this).html(" " + "Paragraph #" + i);
});

$("button").click(function(){

$("li").each(function(){
 
 alert($(this).text());
  
		});

	});

});