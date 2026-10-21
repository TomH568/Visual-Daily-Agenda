const adminBtn = document.getElementById("adminviewbutton");
adminBtn.addEventListener("click", () => changeToAdminView());
const childBtn = document.getElementById("childviewbutton");
childBtn.addEventListener("click", () => changeToChildView());
const settingsBtn = document.getElementById("settingsbutton");
settingsBtn.addEventListener("click", () => settingsView());

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

function changeToAdminView () {
    searchView.style.display = "block";
    searchView.style.width = "30%";
    searchView.style.flex = "0 0 30%";

    childView.style.display = "block";
    childView.style.width = "70%";
}

function changeToChildView () {
    searchView.style.display = "none";

    childView.style.display = "block";
    childView.style.width = "100%";
}

function settingsView () {
    // TODO: settings popup
}