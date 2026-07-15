// ======================================================
// Typing Animation
// ======================================================

const roles = [
    "Data Analyst",
    "Power BI & SQL Analyst",
    "Aspiring Data Scientist",
    "SQL Developer",
    "Power BI Developer",
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


// ======================================================
// Logo Click Animation
// ======================================================

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {

    logo.classList.add("active");

    setTimeout(() => {
        logo.classList.remove("active");
    },700);

});

// ======================================================
// Accent Color Changer
// ======================================================

const colors = [
    "#8B5CF6",
    "#F59E0B",
    "#10B981",
    "#EF4444",
    "#3B82F6",
    "#06B6D4",
    "#10B981",
    "#EC4899",
    "#22C55E",
    "#84CC16",
    "#EAB308",
    "#F59E0B",
    "#F97316",
    "#D946EF",
    "#6366F1",
    "#14B8A6",
    "#A855F7"
];

let currentColor = 0;
if(logo){
logo.addEventListener("click", () => {

    currentColor++;

    if (currentColor >= colors.length) {

        currentColor = 0;

    }

    document.documentElement.style.setProperty(
        "--accent",
        colors[currentColor]
    );

});
 }


// ======================================================
// Active Navigation
// ======================================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ======================================================
// Scroll Progress Bar
// ======================================================

const progressBar = document.getElementById("progress-bar");
const progressDot = document.querySelector(".progress-dot");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

    progressDot.style.left = progress + "%";

});


// ======================================================
// Mobile Navigation
// ======================================================

 const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuToggle && navMenu){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuToggle.innerHTML =
navMenu.classList.contains("active")
? '<i class="fa-solid fa-xmark"></i>'
: '<i class="fa-solid fa-bars"></i>';

});

}


// ======================================================
// Close Mobile Menu After Click
// ======================================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// =============================
// Navbar Mouse Glow
// =============================

const navbar = document.querySelector(".navbar");

if(navbar){

navbar.addEventListener("mousemove",(e)=>{

const rect = navbar.getBoundingClientRect();

navbar.style.setProperty("--mouse-x",
`${e.clientX-rect.left}px`);

navbar.style.setProperty("--mouse-y",
`${e.clientY-rect.top}px`);

});

}

// =============================
// Premium Project Card Tilt
// =============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");

        card.style.setProperty("--y", y + "px");

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = -(y - rect.height / 2) / 18;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});

// =============================
// Animated Counter
// =============================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 60;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));


window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },1200);

});

const magneticButtons = document.querySelectorAll(
".primary-btn,.secondary-btn,.resume-btn,.certificate-btn,.github-btn,.live-btn"
);

magneticButtons.forEach(button => {

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        button.style.transform =
        `translate(${x*0.18}px, ${y*0.18}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform = "translate(0,0)";

    });

});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
