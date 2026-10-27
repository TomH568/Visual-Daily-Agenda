const Picture = require("../picture.js");

const pic = new (Picture);

function makeElementDraggable(imgElement) {
    imgElement.draggable = true;
    imgElement.addEventListener('dragstart', (event) => {
//Limiting dragdrop for child view. If childMode===true return before execution//
                if (childMode) {
                    event.preventDefault();
                    return;
                }
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}

const targetBlocks = document.querySelectorAll('.cell');

targetBlocks.forEach(block => {
    block.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    block.addEventListener('drop', (event) => {
        //Limiting dragdrop for child view. If childMode===true return before execution//
                if (childMode) {
                    event.preventDefault();
                    return;
                }

        event.preventDefault();
        const draggedImgId = event.dataTransfer.getData('text/plain');
        const draggedImg = document.getElementById(draggedImgId);

        if (event.currentTarget.querySelector('img')) {
            event.currentTarget.querySelector('img').remove(); // Remove the existing image if there is one
        }   

        let imgToAppend = draggedImg;

        if (draggedImg.parentNode.className !== event.currentTarget.className) {
            imgToAppend = draggedImg.cloneNode(true); // Clone the dragged image to append it to the target block
            imgToAppend.id = `img-${crypto.randomUUID()}`; // Assign a new id to the cloned image;
            makeElementDraggable(imgToAppend); // Make the cloned image draggable
        }

        event.currentTarget.appendChild(imgToAppend);
    });
});


// 2. Wait for the DOM tree to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('search-form');
    const filterForm = document.getElementById('filter-form');
    const searchInput = document.getElementById('search-input');
    const filterInput = document.getElementById('filter-input');

    let currentImages = [];

    const imageGrid = document.getElementById("image-grid");
    //const resultsTitle = document.getElementById("results-title");
    const emptyMessage = document.getElementById("empty-message");

    function displayImages(imageList) {
        imageGrid.innerHTML = "";
        emptyMessage.hidden = imageList.length !== 0;

        imageList.forEach((image) => {
            const card = document.createElement("div");
            card.className = "image-card";

            //console.log(image);

            const img = document.createElement("img");
            img.src = image;
            img.style.width = "100%";
            makeElementDraggable(img); // Make the image draggable
            img.id = `img-${crypto.randomUUID()}`; // Set the id of the image to the draggedImgId variable
            img.addEventListener('dragstart', (event) => {

                //Limiting dragdrop for child view. If childMode===true return before execution//
                if (childMode) {
                    event.preventDefault();
                    return;
                }
                event.dataTransfer.setData('text/plain', event.target.id); // Store the image id in the dataTransfer object
            });
            //const title = document.createElement("h3");
            //title.textContent = image.title;

            card.appendChild(img);
            //card.appendChild(title);

            imageGrid.appendChild(card);
        });
    }

    function applyFilter() {
        const searchTerm = filterInput.value.trim();
        
        // searches filenames and returns imgs
        const filteredImages = pic.show(searchTerm)

        displayImages(filteredImages);

        
        const targetBlocks2 = document.querySelectorAll('.image-card');

        targetBlocks2.forEach(block => {
            block.addEventListener('dragover', (event) => {
                event.preventDefault();
            });
        
            block.addEventListener('drop', (event) => {
                //Blocking dragdrop for child view. If childMode===true return before execution//
                if (childMode){return;}

                event.preventDefault();
                const draggedImgId = event.dataTransfer.getData('text/plain');
                const draggedImg = document.getElementById(draggedImgId);
                if (event.currentTarget.querySelector('img')) {
                    event.currentTarget.querySelector('img').remove(); // Remove the existing image if there is one
                }
                event.currentTarget.appendChild(draggedImg);
            });
        });

    }


    if (filterInput) {
        filterInput.addEventListener("input", applyFilter)
    }

    currentImages = pic.showAll(); // Display all images initially
    displayImages(currentImages);

    imageGrid.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    imageGrid.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedImgId = event.dataTransfer.getData('text/plain');
        const draggedImg = document.getElementById(draggedImgId);
        draggedImg.remove();
    });

    
});