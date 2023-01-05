/*
    Menu hamburguer

    menu criado com css

    criar o evento de clique para aparecer e desaparecer a lista

    mudar para closed

    https://codepen.io/ljc-dev/pen/zYoqbrN
*/

const btnMenu = document.querySelector(".hamburguer");
const linesMenu = document.querySelectorAll(".menu");
const overlay = document.querySelector(".overlay")

btnMenu.addEventListener("click", () => {

    const itemsMenu = document.querySelector(".items-menu");

    itemsMenu.classList.remove("show-menu")
})