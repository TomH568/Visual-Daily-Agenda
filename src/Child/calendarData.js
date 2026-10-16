class Calendar {

    // this.cells = cells that contain images and type 
    constructor(name, cells) {
        this.name = name;
        this.cells = cells;
    }
}




// Creating a calendar instance for morning 
const morningCalendar = new Calendar("Morning", [

{ type: "first-cell",image: "../Pics/aamu_22246.png" },

{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null}
]);



// Creating a calendar instance for morning 
const afternoonCalendar = new Calendar("Afternoon", [

{ type: "first-cell",image: "../Pics/päivä_20637.png" },

{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null},
{ type: "cell",image: null}
]);