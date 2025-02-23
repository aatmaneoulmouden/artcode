const navLinks = document.querySelectorAll(".nav-link");
const openMobileMenu = document.querySelector("#open-menu");
const closeMobileMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const toggleMobileSubmenu = document.querySelector("#toggle-mobile-submenu");
const mobileSubmenu = document.querySelector("#mobile-submenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function hideMobileMenu() {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
    document.body.style.overflow = 'auto';
}

function showMobileMenu() {
    mobileMenu.classList.add("block");
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = 'hidden';
}

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

openMobileMenu.addEventListener("click", showMobileMenu);

closeMobileMenu.addEventListener("click", hideMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", hideMobileMenu)
})

toggleMobileSubmenu.addEventListener("click", () => {
    mobileSubmenu.classList.toggle("active");
});

var pricingSwiper = new Swiper(".pricingSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});