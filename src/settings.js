const loadcalendarBtn = document.getElementById("loadbutton");
const newcalendarBtn = document.getElementById("newbutton");
const passcodesaveBtn = document.getElementById("passcodesavebutton");

loadcalendarBtn.addEventListener("click", () => restoreCalendar());
newcalendarBtn.addEventListener("click", () => clearCalendar());
passcodesaveBtn.addEventListener("click", () => savePasscode());

const allcalendars = document.getElementsByClassName("calendarclass");

function restoreCalendar() {
    for (const calendar of allcalendars) {
        calendar.replaceChildren();
    }
    renderCalendars();
    styleCellsforSelection();
    cellSelection(document.querySelector(".cell"));
    selectTargetBlocks();
    settingsView();
}

function clearCalendar() {
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        if (cell.children.length > 1) {
            cell.querySelector(":not(.arrow)").remove();
        }        
    }
    settingsView();
}

function savePasscode() {
    const oldPasscode = document.getElementById("oldpasscode");
    const newPasscode = document.getElementById("newpasscode");
    if (oldPasscode.value !== passCode || newPasscode.value == "") {
        document.getElementById("invalidpasscode-message").hidden = false;
        document.getElementById("updatedpasscode-message").hidden = true;
    } else {
        passCode = newPasscode.value.toString();
        profile.passcode = passCode;
        profileData.updateData(profile);
        document.getElementById("invalidpasscode-message").hidden = true;
        document.getElementById("updatedpasscode-message").hidden = false;
    }
}