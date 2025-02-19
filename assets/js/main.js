window.addEventListener("scroll", () => {
    const navBar = document.querySelector("#nav-bar");

    if (window.scrollY > 50) {
        navBar.classList.add("shadow-main");
    } else {
        navBar.classList.remove("shadow-main");
    }
});