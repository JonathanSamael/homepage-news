const btnMenu = document.querySelector(".hamburguer");
const overlay = document.querySelector(".overlay")
const itemsMenu = document.querySelector(".items-menu");
const linesMenu = document.getElementsByClassName("menu");

function toggleMenu() {
    overlay.classList.toggle("show-overlay")
    itemsMenu.classList.toggle("show-menu")
}

function menuClosed() {

    if (linesMenu) {
        linesMenu[0].classList.add("closed")
        linesMenu[1].classList.add("closed")
        linesMenu[2].classList.add("closed")
    } else {
        linesMenu[0].classList.remove("closed")
        linesMenu[1].classList.remove("closed")
        linesMenu[2].classList.remove("closed")
    }

}

btnMenu.addEventListener("click", () => {
    toggleMenu();
    menuClosed();
});

