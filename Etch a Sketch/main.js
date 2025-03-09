document.addEventListener("DOMContentLoaded", () => {
    let colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
        '#FF8C00', '#00FF8C', '#FF33FF', '#33FFFF', '#FFFF33',
        '#FF1493', '#8A2BE2', '#FF4500', '#DA70D6', '#7FFF00',
        '#D2691E', '#FF6347', '#FFD700', '#ADFF2F', '#FF00FF',
        '#40E0D0', '#F0E68C', '#FF8C00', '#98FB98', '#8B0000',
        '#BC8F8F', '#00FA9A', '#FFD700', '#C71585', '#1E90FF'
    ];
    let box = document.querySelector("#division");
    let boxValue = document.querySelector(".text");
    boxValue.textContent = `${box.value}`;
    box.addEventListener("input", () => {
        boxValue.textContent = `${box.value}`;
        let boxes = box.value;
        let numberOfBoxes = document.querySelector(".part44");
        numberOfBoxes.innerHTML = "";
        for (let i = 0; i < boxes * boxes; i++) {
            let numberOfBoxes = document.querySelector(".part44");
            let createdElement = document.createElement("div");
            numberOfBoxes.style.display = "flex";
            numberOfBoxes.style.flexWrap = "wrap";
            numberOfBoxes.style.justifyContent = "center";
            numberOfBoxes.style.alignItems = "center";
            createdElement.style.height = `${500 / boxes}px`;
            createdElement.style.width = `${500 / boxes}px`;
            createdElement.style.border = "1px solid black";
            createdElement.setAttribute("class", "iff");
            numberOfBoxes.appendChild(createdElement);
            createdElement.style.boxSizing = "border-box";
            createdElement.addEventListener("mouseover", () => {
                createdElement.style.backgroundColor = colors[Math.floor(Math.random() * 30)];
            });
        }
    });
    const erase = document.querySelector(".clear");
    erase.addEventListener("mousedown", () => {
        const clearing = document.querySelectorAll(".iff");
        clearing.forEach((element) => {
            element.style.backgroundColor = "white";
        })
    });
});