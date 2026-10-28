//Global variable for child view
let childMode = false;
let passCode = "1234"; // Default passcode -> to exit child view..



//Create variables for the buttons and passcode input field

const passCodeInput = document.getElementById("passCodeInput");
const adminBtn = document.getElementById("adminviewbutton");
const childBtn = document.getElementById("childviewbutton");
const settingsBtn = document.getElementById("settingsbutton");

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

//INITIAL STATE ON PAGE LOAD
adminBtn.textContent = "🔓Admin";
passCodeInput.style.display = "none"; // Hide the passcode input field initially



//EVent listeners for the buttons and passcode input field

adminBtn.addEventListener("click", () => changeToAdminView());

childBtn.addEventListener("click", () => changeToChildView());

settingsBtn.addEventListener("click", () => settingsView());







function changeToAdminView () {
    childMode = false;

    //making passcode input invisible and set to ""
    passCodeInput.style.display = "none";
    passCodeInput.value = "";

    //Update the button text and enable the admin button
    adminBtn.disabled = false;
    adminBtn.textContent = "🔓Admin";

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
    childMode = true;

    //Locking the admin button and changing its text to indicate that it is locked
    adminBtn.disabled = true;
    adminBtn.textContent = "🔒Admin";
    
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
            
            
        }
        else {
            //KEEP LOCKED
            adminBtn.disabled = true;
            
            adminBtn.textContent = "🔒Admin";
            
    
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