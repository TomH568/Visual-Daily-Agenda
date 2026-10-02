const Picture = require("../picture.js");

const pic = new (Picture);

// 2. Wait for the DOM tree to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    const imageGrid = document.getElementById("image-grid");
    const resultsTitle = document.getElementById("results-title");
    const emptyMessage = document.getElementById("empty-message");

    function displayImages(imageList) {
        imageGrid.innerHTML = "";
        emptyMessage.hidden = imageList.length !== 0;

        imageList.forEach((image) => {
            const card = document.createElement("div");
            card.className = "image-card";

            console.log(image);

            const img = document.createElement("img");
            img.src = image;
            img.style.width = "15vw";
            //img.alt = image.title;

            //const title = document.createElement("h3");
            //title.textContent = image.title;

            card.appendChild(img);
            //card.appendChild(title);

            imageGrid.appendChild(card);
        });
    }

    // 3. Listen for the form submission (button click or Enter key press)
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the page from reloading

        const textValue = searchInput.value;

        if (textValue) { 
            
            const imageResults = pic.show(textValue); 
            
            console.log("Found files:", imageResults);

            displayImages(imageResults);
            
        }
    });
});




/*const images = [
    {
        title: "Aamiainen",
        category: "ateria",
        img: "aamiainen.png" // https://kuvatyokalu.papunet.net/247343/42f10e235bfafcbb4794d8c20c6576f9/ (c: Mulberry Symbols)
    },
    {
        title: "Lapaset",
        category: "vaatteet",
        img: "lapaset.jpg" // https://kuvatyokalu.papunet.net/247343/42f10e235bfafcbb4794d8c20c6576f9/ (c: Elina Vanninen)
    },
    {
        title: "Ateria",
        category: "ateria",
        img: "ateria.png" // https://kuvatyokalu.papunet.net/247343/42f10e235bfafcbb4794d8c20c6576f9/ (c: Mulberry Symbols)
    },
    {
        title: "Kylpy",
        category: "peseytyminen",
        img: "kylpy.png" // https://kuvatyokalu.papunet.net/247343/42f10e235bfafcbb4794d8c20c6576f9/ (c: Mulberry Symbols)
    },
    {
        title: "Kirjoittaa",
        category: "vapaa-aika",
        img: "kirjoittaa.png" // https://kuvatyokalu.papunet.net/247343/42f10e235bfafcbb4794d8c20c6576f9/ (c: Mulberry Symbols)
    }
];*/