//Global variable for child view
let childMode = false;

const adminBtn = document.getElementById("adminviewbutton");
adminBtn.addEventListener("click", () => changeToAdminView());
const childBtn = document.getElementById("childviewbutton");
childBtn.addEventListener("click", () => changeToChildView());
const settingsBtn = document.getElementById("settingsbutton");
settingsBtn.addEventListener("click", () => settingsView());

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

function changeToAdminView () {
    childMode = false;
    searchView.style.display = "block";
    searchView.style.width = "32%";
    searchView.style.flex = "0 0 32%";

    childView.style.display = "block";
    childView.style.width = "68%";
    childView.style.left = "max(32vw, 150px)";
}

function changeToChildView () {
    searchView.style.display = "none";
    childMode = true;
    childView.style.display = "block";
    childView.style.width = "100%";
    childView.style.left = "0px";
}

function settingsView () {
    // TODO: settings popup
}