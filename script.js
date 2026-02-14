// ========================
// 1️⃣ Animate Skill Bars
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width") || "0%";
        bar.style.width = "0%"; // start from 0
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = targetWidth;
        }, 200); // small delay for smooth animation
    });
});

// ========================
// 2️⃣ Smooth Scroll for Navigation
// ========================
const navLinks = document.querySelectorAll("nav a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ========================
// 3️⃣ Dark/Light Theme Toggle
// ========================
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeButton.textContent = document.body.classList.contains("dark-theme")
            ? "Light Mode"
            : "Dark Mode";
    });
}

// ========================
// 4️⃣ Project Details Toggle
// ========================
const projectToggles = document.querySelectorAll(".project-toggle");

projectToggles.forEach(btn => {
    btn.addEventListener("click", () => {
        const details = btn.nextElementSibling; // assumes next element is project details
        if (details) {
            details.classList.toggle("active");
            btn.textContent = details.classList.contains("active") 
                ? "Hide Details" 
                : "Show Details";
        }
    });
});

// ========================
// 5️⃣ Optional: Scroll Reveal Animations
// ========================
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 50) {
            el.classList.add("active");
        }
    });
});
