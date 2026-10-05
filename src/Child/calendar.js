// Trying to generate calendar of cell classes 




function createCalendar(containerId, calendarData) {


    const container = document.getElementById(containerId);


    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    
    for ( let i = 0; i < calendarData.length; i++) {

        const cell = document.createElement("div");


        if (calendarData[i].type === "first-cell"){

            cell.className = "first-cell";  
        }
        else {

            cell.className ="cell";   
        }
        if (calendarData[i].image) {

            const img = document.createElement("img");

            img.src = calendarData[i].image;

            //nested if so as to check whether the first element is a "time" img or regular.

            if (calendarData[i].type === "first-cell") {
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

createCalendar("calendar-container", calendarData);