const programsParent = document.querySelector("#programs-parent");
const programsParentArrow = document.querySelector("#programs-parent svg");
const programsMenu = document.querySelector("#programs");

console.log("Hhh");

programsParent.addEventListener("click", () => {
    programsParentArrow.classList.toggle("rotate-180");
    programsMenu.classList.toggle("hidden");
    // programsMenu.classList.toggle("top-move");
});