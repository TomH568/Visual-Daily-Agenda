//Global variable for child view
let childMode = false;
let passCode = "1234"; // Default passcode -> to exit child view..



//Create variables for the buttons and passcode input field

const passCodeInput = document.getElementById("passCodeInput");
const adminBtn = document.getElementById("adminviewbutton");
const childBtn = document.getElementById("childviewbutton");
const settingsBtn = document.getElementById("settingsbutton");
const settingsCloseBtn = document.getElementById("closesettingsbutton");

//-----------------Calendar  views toggle -------------
// creating a btn for each calendar object to toggle between.
const mornBtn = document.getElementById("morningBtn");
const aftBtn = document.getElementById("afternoonBtn");
const eveBtn = document.getElementById("eveBtn");
const nightBtn = document.getElementById("nightBtn");

//-----------------views toggle -------------

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

//INITIAL STATE ON PAGE LOAD
adminBtn.textContent = "🔓Admin";
adminBtn.style.display = "none"; // Hide the admin button initially
passCodeInput.style.display = "none"; // Hide the passcode input field initially



//EVent listeners for the buttons and passcode input field

adminBtn.addEventListener("click", () => changeToAdminView());

childBtn.addEventListener("click", () => changeToChildView());


settingsBtn.addEventListener("click", () => settingsView());
settingsCloseBtn.addEventListener("click", () => settingsView());

mornBtn.addEventListener("click", () => { toggleCalendar("calendar-container") });
aftBtn.addEventListener("click", () => {toggleCalendar("calendar-container2") });
eveBtn.addEventListener("click", () => {toggleCalendar("calendar-container3") });
nightBtn.addEventListener("click", () => {toggleCalendar("calendar-container4") });
    // function to view the selected calendar and hide the others

function toggleCalendar(containerId) {

    const calendar = document.getElementById(containerId);
    
    const selectedButton = {
        "calendar-container": mornBtn,
        "calendar-container2": aftBtn,
        "calendar-container3": eveBtn,
        "calendar-container4": nightBtn
    }[containerId];
    
    if (calendar.style.display === "none") {
        calendar.style.display = "block";
        selectedButton.classList.add("active");
        selectedButton.classList.remove("inactive");
    } else {
        calendar.style.display = "none";
        selectedButton.classList.remove("active");
        selectedButton.classList.add("inactive");
        
    }
};






function changeToAdminView () {
    childMode = false;
    childBtn.style.display = "";

    //making passcode input invisible and set to ""
    passCodeInput.style.display = "none";
    passCodeInput.value = "";

    //Update the button text and enable the admin button
    adminBtn.disabled = false;
    adminBtn.textContent = "🔓Admin";
    adminBtn.style.display = "none"; // Hide the admin button when in admin view

    //Update the settings button similarly to admin button
    settingsBtn.disabled = false;
    settingsBtn.textContent = "🔓Settings";

    //styling the search and child view to be side by side
    searchView.style.display = "block";
    searchView.style.width = "32%";
    searchView.style.flex = "0 0 32%";

    childView.style.display = "block";
    childView.style.width = "68%";
    childView.style.left = "max(32vw, 150px)";


}

function changeToChildView () {
    searchView.style.display = "none"; // Hide the search view
    adminBtn.style.display = "none"; // Hide the Admin button 
    childBtn.style.display = "none"; // hide child button when on child
    settingsBtn.style.display = "none"; // hide settings from child
    childMode = true;

    //Locking the admin button and changing its text to indicate that it is locked
    adminBtn.disabled = true;
    adminBtn.textContent = "🔒Admin";

    //Locking the settings button similarly to admin button
    settingsBtn.disabled = true;
    settingsBtn.textContent = "🔒Settings";
    
    passCodeInput.style.display = "block"; // Show the passcode input field
    passCodeInput.value = ""; // Clear the passcode input field

    // Styling the search and child view to be side by side
    childView.style.display = "block";
    childView.style.width = "100%";
    childView.style.left = "0px";
}
    
    //Making the passcode input field listen for input and check if it matches the passcode. If it does, change to admin view. If not, display an alert message.
    passCodeInput.addEventListener("input", () => {

        //CORRECT CODE INPUT
        if (passCodeInput.value === passCode) {
            adminBtn.disabled = false;
            adminBtn.textContent = "🔓Admin";
            adminBtn.style.display = "";

            settingsBtn.disabled = false;
            settingsBtn.textContent = "🔓Settings";
            settingsBtn.style.display = "";
            
        }
        else {
            //KEEP LOCKED
            adminBtn.disabled = true;
            adminBtn.textContent = "🔒Admin";
            adminBtn.style.display = "";
            settingsBtn.disabled = true;
            settingsBtn.textContent = "🔒Settings";
            settingsBtn.style.display = "";
        }
            
    

    });

const settingsContainer = document.getElementById("settings-container");

function settingsView () {
    if (settingsContainer.style.display === "none") {
        settingsContainer.style.display = "flex";
    } else {
        document.getElementById("oldpasscode").value = "";
        document.getElementById("newpasscode").value = "";
        document.getElementById("invalidpasscode-message").hidden = true;
        document.getElementById("updatedpasscode-message").hidden = true;
        settingsContainer.style.display = "none";
    }
}
