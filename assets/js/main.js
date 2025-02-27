const navLinks = document.querySelectorAll(".nav-link");
const openMobileMenu = document.querySelector("#open-menu");
const closeMobileMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const toggleMobileSubmenu = document.querySelector("#toggle-mobile-submenu");
const mobileSubmenu = document.querySelector("#mobile-submenu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const aboutSection = document.querySelector("#about");
const studentsNumber = document.querySelector("#students-num");
const majorsNumber = document.querySelector("#majors-num");
const teachersNumber = document.querySelector("#teachers-num");

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

AOS.init();

function animateNumber(HTMLElement, end, duration) { // No start because it always starts at 0
    let startTimestamp;

    const increaseNumber = (timestamp) => {
        if (startTimestamp === undefined) startTimestamp = timestamp;

        let progress = Math.min((timestamp - startTimestamp) / duration, 1);

        HTMLElement.innerHTML = Math.floor(progress * end);

        if (progress < 1) window.requestAnimationFrame(increaseNumber);
    };

    window.requestAnimationFrame(increaseNumber); // Runs only at the first time and returns <timestamp>
}

animateNumber(studentsNumber, 1000, 1000);
animateNumber(majorsNumber, 20, 1000);
animateNumber(teachersNumber, 500, 1000);