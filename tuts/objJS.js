/*
http://www.elated.com/articles/javascript-dom-intro/
js - OOP language
----------------
4 capabilities:
encapsulation- store related informaton together in a the object
inheritance- one class relying on superclass for propertes and methods 
aggregation-store one object in another object
polymorphism - writing one function or methods that works in different ways



Object Propertes
----------------
Object properties can be any of the three primitive data types,
 or any of the abstract data types, such as another object. 
 Object properties are usually variables that are used internally
 in the object's methods, but can also be globally visible
 variables that are used throughout the page.
 
 objectName.objectProperty = propertyValue;

*/

var str= document.title;

function addPrice(amount){
this.price=amount;
}
// Here this keyword is used to refer to the object that has been passed to a function.
function book(title, author){
this.title=title;
this.author=author;
this. addPrice=addPrice;

}
//User Define Objects
//The new operator is used to create an instance of an object.
// new operator followed by constructor

var myBook = new book("The Alchemist", "Paulo Coulo");
myBook.addPrice(100);

document.write("Book Title: " +  myBook.title + "<br>");
document.write("Author: "+ myBook.author + "<br>");
document.write("Price of " + myBook.title + " is $" + myBook.price + "<br>");

/*Another way declare variable first*/
var da="March 28, 1994";

function date(da){
this.d=da;
}

var date= new date(da);

document.write("Your birthday is: " + date.d + "<br>");

/*
 with objects in js first declare varibles used in objects,
 Next declare method to store objects
 access variable or methods from object reference name 
 */
 
 //this is constructor to create object and initialize values
 var myDay= new Object();
 myDay.day=22;
 myDay.month="Janurary";
 myDay.year=2015;
 document.write("Today's date is " + myDay.month + " " + myDay.day + "," + myDay.year +"<br>");
 
 /*
-------------------------------
RETRIEVE PAGE ELEMENTS from DOM
-------------------------------
 
 */
 
 var getTag= document.getElementsByTagName("h1");
 var getId= document.getElementsById("dom");
 
 document.write( "h1 tag is" + getTag +"<br>");
 document.write("dom id  is " + getId);
 
 