 
//The innerHTML property sets or returns the HTML content (inner HTML) of an element.
 //innerHTML is property to display information
document.getElementById("hello").innerHTML = "Hello, it's me";
document.getElementById("myDiv").innerHTML = "Yo, yo, yo";

document.getElementById("myCheckBox").addEventListener('click', function(event){
//prevent checkbox from having a actual check mark
event.preventDefault();


});

document.getElementById("btn").addEventListener('click', 
                       function(){  
                       document.getElementById("example").innerHTML = "Hello Gurl";
                           });
