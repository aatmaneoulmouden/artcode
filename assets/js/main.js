const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    const navBar = document.querySelector("#nav-bar");

    if (window.scrollY > 50) {
        navBar.classList.add("shadow-main");
    } else {
        navBar.classList.remove("shadow-main");
    }
});

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navLinks.forEach(navLinktoDisable => {
            navLinktoDisable.classList.remove("active");
        });

        navLink.classList.add("active");
    });
});