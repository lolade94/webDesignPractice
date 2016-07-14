$(document).ready( function(){
//green panel button

/*once you click add class close-green */
$('#expand-green').on('click', function(){
$(this).toggleClass('close-green');
//add open-green class to text  to show block;
$('.text').toggleClass('open-green').end();

});


});