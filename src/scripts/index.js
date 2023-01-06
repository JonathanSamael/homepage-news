const btnMenu = document.querySelector(".hamburguer");
const overlay = document.querySelector(".overlay")
const itemsMenu = document.querySelector(".items-menu");
const linesMenu = document.querySelectorAll(".menu");

function toggleMenu() {
    overlay.classList.toggle("show-overlay")
    itemsMenu.classList.toggle("show-menu")
}

function menuClosed() {

    linesMenu.forEach(line => {

        if(line.classList.contains("closed")) {
            line.classList.remove("closed")
        } else {
            line.classList.add("closed")
        }
    })
};

btnMenu.addEventListener("click", () => {
    toggleMenu();
    menuClosed();
});

