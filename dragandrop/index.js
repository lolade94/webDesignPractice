


function dragDrop(event){
		
		
		//hold data to dragged into another content box by element id
		var idElem= event.dataTransfer.getData('ID');
		
		event.target.appendChild(document.getElementById(idElem));

}

function  dragOver(event){

		event.target.classList.remove("dragging");
		return false;

}


function dragStart(event)
{

event.dataTransfer.setData('ID', event.target.getAttribute('id'));
event.target.classList.add('dragging');

}
