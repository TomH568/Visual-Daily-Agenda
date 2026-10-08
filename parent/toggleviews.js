const viewBtn = document.getElementById("toggle-view");
viewBtn.addEventListener("click", () => toggleView());

const searchView = document.getElementById("search-side");
const childView = document.getElementById("container-for-calendars");

const views = ["A/B", "A", "B"]
let viewIndex = 0;

function toggleView() {
    if (viewIndex < 2) {
        viewIndex += 1;
    } else {
        viewIndex = 0;
    }

    viewBtn.innerHTML = views[viewIndex];

    if (views[viewIndex] == "A/B") {
        searchView.style.display = "block";
        searchView.style.width = "30%";

        childView.style.display = "block";
        childView.style.width = "70%";
    }
    if (views[viewIndex] == "A") {
        searchView.style.width = "100%";

        childView.style.display = "none";
    }
    if (views[viewIndex] == "B") {
        searchView.style.display = "none";

        childView.style.display = "block";
        childView.style.width = "100%";
    }
}