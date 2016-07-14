
$(document).ready(function(){
// one button is clicked 
          $('.bb').click( function(){
		  //call the animUp() 
		  animUp();
		  
		  });
		  
		  //$('selector').animate('{property:value}', [duration], [ease]);
		  //“slow” (600ms), “normal” (400ms), or “fast” (200ms). The default is “normal”
		  
		   	function animUp(){
				//ball goes to the  Top and then call animDown
				$('#ball').animate({top:"1px"}, "slow", "swing", animDown);
				
			   }
			   
				
				function animDown(){
				//ball goes down and call the function animUp
				$('#ball').animate({top:"340px"}, "slow", "swing", animUp);
				
				}
               

			

});