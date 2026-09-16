const cells = document.getElementsByClassName("cell");

for (const cell of cells) {
    cell.style.filter = "grayscale(80%) brightness(80%)"

    const selectionArrow = document.createElement("div");
    selectionArrow.style.display = "none";
    selectionArrow.style.position = "absolute";
    selectionArrow.style.marginTop = "220px";
    selectionArrow.style.fontSize = "40px";
    selectionArrow.innerHTML = "▲";
    cell.appendChild(selectionArrow);

    cell.onclick = function () {
        cellSelection(cell);
    };
}

cells[0].style.border = "4px solid red";
cells[0].style.filter = "";
cells[0].lastChild.style.display = "block";

function cellSelection(element) {
    for (const cell of cells) {
        cell.style.border = "";
        cell.style.filter = "grayscale(80%) brightness(80%)"
        cell.lastChild.style.display = "none";
    }
    element.style.border = "4px solid red";
    element.style.filter = "";
    element.lastChild.style.display = "block";
}