const cells = document.getElementsByClassName("cell");

for (const cell of cells) {
    cell.style.filter = "grayscale(80%) brightness(80%)"

    const selectionArrow = document.createElement("div");
    selectionArrow.style.display = "none";
    selectionArrow.style.position = "absolute";
    selectionArrow.style.marginTop = "max(15%, 20vh)";
    selectionArrow.style.fontSize = "max(3vw, 3vh)";
    selectionArrow.innerHTML = "▲";
    selectionArrow.classList += "arrow";
    cell.appendChild(selectionArrow);

    cell.onclick = function () {
        cellSelection(cell);
    };
}

cells[0].style.border = "4px solid #e95d64";
cells[0].style.filter = "";
cells[0].querySelector(".arrow").style.display = "block";

function cellSelection(element) {
    for (const cell of cells) {
        cell.style.border = "";
        cell.style.filter = "grayscale(80%) brightness(80%)"
        cell.querySelector(".arrow").style.display = "none";
    }
    element.style.border = "4px solid #e95d64";
    element.style.filter = "";
    element.querySelector(".arrow").style.display = "block";
}