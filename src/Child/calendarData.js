class Calendar {

    // this.cells = cells that contain images and type 
    constructor(id,name,color, cells,visible = true) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.cells = cells;
        this.visible = visible;
    }
}




// Creating a calendar instance for morning 
const morningCalendar = new Calendar(1, "Morning", "#dcc8de", [

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
const afternoonCalendar = new Calendar(2, "Afternoon", "#c8ded3", [

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

//evening calendar
const eveningCalendar = new Calendar(3, "Evening", "#f0e6d2", [
    { type: "first-cell", image: "../Pics/ilta_19370.png" },

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

//evening calendar
const nightCalendar = new Calendar(4, "Night", "#d0c0b0", [
    { type: "first-cell", image: "../Pics/yö_22373.png" },

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

// Creating an array for parsing to json - will store list of calendars
const calendars = [morningCalendar, afternoonCalendar, eveningCalendar, nightCalendar];