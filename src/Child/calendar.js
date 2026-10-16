// Trying to generate calendar of cell classes 




function createCalendar(containerId, calendar) {

 // create a container for the calendar
    const container = document.getElementById(containerId);

    // create a grid for the calendar
    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    // create div for each cell in the calendar
    for ( let i = 0; i < calendar.cells.length; i++) {
        // get the current cell from the calendar class
        const currentCell = calendar.cells[i];

        const cell = document.createElement("div");

        // check if the current cell is a first-cell  or a regular cell and assign class 
        if (currentCell.type === "first-cell"){

            cell.className = "first-cell";  
        }
        else {

            cell.className ="cell";   
        }
        // checkk for images 
        if (currentCell.image) {

            const img = document.createElement("img");

            img.src = currentCell.image;

            //nested if so as to check whether the first element is a "time" img or regular.

            if (currentCell.type === "first-cell") {
                img.className = "time_image";
            }
            else {
                img.className = "image";
            }
            cell.appendChild(img);
        }
        grid.appendChild(cell);
    }

    container.appendChild(grid); 
}
// creatinng calendars for morning and afternoon//
createCalendar("calendar-container", morningCalendar);
createCalendar("calendar-container2", afternoonCalendar);
