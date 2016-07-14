
$(document).ready(function(){
//get nav position  relative to html document
var navTopPosition= $('.nav').offset().top;


//alert(navTopPosition);


//function to make nav bar fixed
var stickyNav= function(){
//keeps track of pixels  scrolled away from the top
var scrollTop= $(window).scrollTop();




if(scrollTop> navTopPosition) //scrolltop is greater the nav position
{//add css fixed styling to nav element
  $('.nav ').addClass('sticky');
  
}
else{
  $(' .nav').removeClass('sticky'); //remove sticky class
}

};

//call stickyNav function
//stickyNav();



// scroll through stickyNav function
$(window).scroll(function(){ stickyNav();});


});