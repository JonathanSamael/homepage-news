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
    
        if (line.classList == "menu") {

            linesMenu[0].classList.add("closed")
            linesMenu[1].classList.add("closed")
            linesMenu[2].classList.add("closed")

        } else if (line.classList.contains("closed")){

            linesMenu[0].classList.remove("closed")
            linesMenu[1].classList.remove("closed")
            linesMenu[2].classList.remove("closed")
        }
    })
};





btnMenu.addEventListener("click", () => {
    toggleMenu();
    menuClosed();
});

