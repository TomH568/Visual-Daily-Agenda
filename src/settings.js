const loadcalendarBtn = document.getElementById("loadbutton");
const newcalendarBtn = document.getElementById("newbutton");

loadcalendarBtn.addEventListener("click", () => restoreCalendar());
newcalendarBtn.addEventListener("click", () => clearCalendar());

const allcalendars = document.getElementsByClassName("calendarclass");

function restoreCalendar() {
    for (const calendar of allcalendars) {
        calendar.replaceChildren();
    }
    renderCalendars();
    styleCellsforSelection();
    // cellSelection(cells[0]);
    // BUG: Drag&drop doesn't work after loading/restoring
}

function clearCalendar() {
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        if (cell.children.length > 1) {
            cell.querySelector(":not(.arrow)").remove();
        }        
    }
}