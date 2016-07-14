

var arra=[2, 20, 1, 3, 5 , 18, 54];

var M=arra[0];

for(var i=0; i< arra.length; i++){
     
	 if(arra[i] > M){
	   M = arra[i];
	 }
   
}

window.onload=function(){
 document.getElementById("btn").addEventListener("click", function(){
 document.getElementById("max").innerHTML ="Maximum Number is " + M ;
 });
 
 
 };