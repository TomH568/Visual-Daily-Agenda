const viewBtn = document.getElementById("toggle-view");
viewBtn.addEventListener("click", () => toggleView());

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

const views = ["Settings", "View Calendars", "Search Images"];
let viewIndex = 0;

function toggleView() {
    if (viewIndex < 2) {
        viewIndex += 1;
    } else {
        viewIndex = 0;
    }

    viewBtn.innerHTML = views[viewIndex];

    if (views[viewIndex] == "Settings") {
        searchView.style.display = "block";
        searchView.style.width = "30%";
        searchView.style.flex = "0 0 30%";

        childView.style.display = "block";
        childView.style.width = "70%";
    }
    if (views[viewIndex] == "View Calendars") {
        searchView.style.width = "100%";
        searchView.style.flex = "0 0 100%";

        childView.style.display = "none";
    }
    if (views[viewIndex] == "Search Images") {
        searchView.style.display = "none";

        childView.style.display = "block";
        childView.style.width = "100%";
    }
}