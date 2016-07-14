var totalRows=4;
var itemCol=0;

for(var row=0; row<totalRows; row++){

newCol= document.createElement("div");
newCol.className='col';
//new column created by <div class="col">

document.getElementsByClassName('wrapper')[0].appendChild(newCol);

}

for( var itemCount=0; itemCount< document.getElementsByClassName('item').length; itemCount++){

document.getElementsByClassName('col')[itemCol].appendChild(document.getElementsByClassName('item')[0]);

if(itemCol<totalRows-1)
itemCol++;
else
itemCol=0;

}