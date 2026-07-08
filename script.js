const roles = [
    "Data Analyst",
    "Power BI & SQL Analyst",
    "Aspiring Data Scientist",
    "Turning Data into Insights"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const element = document.getElementById("typing");

    if (!element) return;

    currentText = roles[roleIndex];

    if (!isDeleting) {

        element.textContent = currentText.substring(0, charIndex++);
    } else {

        element.textContent = currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

const logo = document.querySelector(".logo");
const logoLink = document.querySelector(".logo a");

logo.addEventListener("click", () => {

    logoLink.classList.add("active");

    setTimeout(() => {
        logoLink.classList.remove("active");
    }, 700);

});

const colors = [
    "#8B5CF6", // Purple
    "#EF4444", // Red
    "#EC4899", // Pink
    "#F59E0B", // Yellow
    "#10B981", // Green
    "#3B82F6",  // Blue
    "#06B6D4", // Cyan
    "#10B981", // Emerald
    "#22C55E", // Green
    "#84CC16", // Lime
    "#EAB308", // Yellow
    "#F59E0B", // Amber
    "#F97316", // Orange
    "#D946EF", // Magenta
    "#6366F1", // Indigo
    "#14B8A6", // Teal
    "#A855F7", // Violet
];

let current = 0;

document.querySelector(".logo").addEventListener("click", () => {

    current++;

    if(current >= colors.length){
        current = 0;
    }

    document.documentElement.style.setProperty(
        "--accent",
        colors[current]
    );

});

// =============================
// Active Navbar
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// Scroll Progress Bar
// =============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    menuToggle.innerHTML = navMenu.classList.contains("active")

    ? '<i class="fa-solid fa-xmark"></i>'

    : '<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});