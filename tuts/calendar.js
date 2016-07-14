/* Date Object */

//object is standalone entity  with properties(characteristics and actions) and types 
var current= new Date();
 
window.onload=function(){
document.getElementById("dates").innerHTML = current;
}

//Create an array of days to create days  in dates

var cal_days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//Create an array of months
var cal_months=['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var cal_days_in_month=['31', '28','31', '30', '31', '30','31', '31', '30', '31', '30', '31'];

/*
The Calendar constructor
Our constructor is pretty basic at the moment. I've designed it to take two arguments, 
a month and year (both integers) which will represent the intial calendar state. 
If these arguments are missing or null, the global default date object will be used instead.

function Calendar(month, year) {
  this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  this.html = '';
}

    Right now you might be saying "hey, why the long syntax? Can't we just do a shortcut like this?"

    this.month = month || cal_current_date.getMonth();

    One of the pitfalls of this method is that zero can be interpreted as false,
	which means if we specify zero (January) for our month, 
	this expression would use the default month instead.

    We also want the option to pass null for one or both of the values.
	The isNaN() function returns true when passed a null value, which 
	will produce an incorrect result. So we have to test for both conditions: 
	the argument must either be not a number or null for the default to be used.


*/



function Calendar(month, year){
//make sure month is not null
this.month= (isNaN(month)|| month==null) ? current.getMonth() : month;
this.year=(isNaN(year)|| year==null) ? current.getFullYear(): year;
this.html='';
}


/*

First day of the week

March 2007 begins on a Thursday, but the Date object doesn't know that. However, if we specifically give 
it the date of "March 1 2007" to parse, it can tell us that day of the week as an integer (from 0-6).
 So, let's feed it such a date: 

*/


Calendar.prototype.generateHTML=function(){

var firstDay=  new Date(this.year, this.month, 1);

//We can now query the new Date object for the day of the week:
var startDay= firstDay.getDay();

//find days in a month
var monthLength= cal_days_in_month[this.month];
//leap year
if(this.month=1)
{
if(this.year%4==0 && this.year%100==0 || this.year%400==0){
monthLength=29;
}
}
// cal_months array name [month #]
var monthName= cal_months[this.month];

// draw html
var html='<table class="calendar-table"> ';
html+='<tr><th colspan="7">';
html+= monthName + "&nbsp;" + this.year;
html+='</th> </tr>';
html+='<tr class="calendar-header">';
//List Days in Week
for(var i=0; i<cal_days.length;i++){
html+='<td class="header_day"> ';
cal_days[i];//days in week[Mon, Tues, Wed, Thu, Fri, Sat, Sun] 0-6
html+='</td>';
}
html+='</tr><tr>';


var dayCount= 1;
for( var week=0; week<9; week++){
html+='<td class="cal_day">';
for (var dayw=0; dayw<=6; dayw++)
{    //days less than month number of days
     //i greater than 0 
 if( dayCount<= monthLength && (week>0 || dayw>=startDay))
 {
 html+=dayCount;//adds and output each day
 dayCount++;//updates day
 }
 
 html+='</td>';// end of each day

		}//end of days in week
		
/* STOP MAKING MORE DAY IF WE REACH MONTHlength*/
 if(dayCount> monthLength){
  break;}
  
  else
  {
  html+='<tr></tr>';
	}
 }//weeks or rows

	html+='</tr></table>';
	this.html=html;
	
	
	

}//end of calendar prototype



//GET HTML CONTENT
Calendar.prototype.getHTML = function(){
return this.html;

}

