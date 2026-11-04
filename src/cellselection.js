function styleCellsforSelection(mode) {
    const cells = document.getElementsByClassName("cell");
    if ( mode == "add" ) {
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
    } 
    if ( mode == "remove" ) {
        for (const cell of cells) {
            cell.style.border = "";
            cell.style.filter = "";
            cell.querySelector(".arrow").style.display = "none";
        }
    }
}

function cellSelection(element) {
    if ( childMode == true ) {
        const cells = document.getElementsByClassName("cell");
        for (const cell of cells) {
            cell.style.border = "";
            cell.style.filter = "grayscale(80%) brightness(80%)"
            cell.querySelector(".arrow").style.display = "none";
        }
        element.style.border = "4px solid #e95d64";
        element.style.filter = "";
        element.querySelector(".arrow").style.display = "block";
    }
}

styleCellsforSelection("add"); // adds selection styling to all the cells
cellSelection(document.querySelector(".cell")); // selects the first cell