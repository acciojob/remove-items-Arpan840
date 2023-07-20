//your JS code here. If required.
let button= document.querySelector('.button');
let colorSelect= document.getElementById('colorSelect')
function removeColor(){
	let selectedIndex= colorSelect.selectedIndex;
	if(selectedIndex!== -1)
	{
	colorSelect.remove(selectedIndex)}
}
button.addEventListener('click', removeColor)