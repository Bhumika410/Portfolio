/* =====================================================
   MOBILE MENU
===================================================== */

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        contactForm.reset();
    });

}


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    links.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   HEADER SHADOW ON SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 3px 15px rgba(0, 0, 0, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* =====================================================
   CURRENT YEAR IN FOOTER
===================================================== */

const footerYear = document.querySelector(".footer p");

if (footerYear) {
    footerYear.textContent =
        "© " + new Date().getFullYear() +
        " Bhumika. All Rights Reserved.";
}
