// define our variables 
const formSubmition = document.getElementById('sizePicker');
const color = document.querySelector('#colorPicker');
const table = document.querySelector("#pixelCanvas");

// function to make the grid where the height and width are inputs from the user
function makeGrid(height, width) {
	var container= ''; // variable container is the gird 

	//for loop to make the rows of the grid 
	for (var i = 1; i <= height; i++) { 
		container += '<tr class="row-' + i + '">';

		// for loop to make the cells of the grid 
		for (var j = 1; j <= width; j++) {
			container += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
		}
		// to add the cells to the grid container 
		container += '</tr>';
	}
	// to add the grid container to the table element
	table.innerHTML = container;
}

// function to color the cells of the grid 
function coloring(){
	// define the variable cell 
	var cells = document.querySelectorAll('.cell');

	// for loop to go through the cells 
	for (var i = 0; i < cells.length; i++) {
		// to color the clicked on cell 
		exactCell=cells[i]
        exactCell.addEventListener("click", function (event) {
            event.target.style.backgroundColor = color.value;
        });
    }

}

// to listen to the click on the submit botton 
formSubmition.addEventListener("submit", function (event){
	event.preventDefault(); // to prevent the defult reload
 	height = document.querySelector('#inputHeight').value; // value of the height
 	width = document.querySelector('#inputWidth').value; // value of the width

	makeGrid(height,width); // send the entered value of the height and width to the makeGrid function
	coloring(); // call the coloring function 
});


