/* ==========================
   NAVBAR SCROLL EFFECT
========================== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* ==========================
   SMOOTH ACTIVE NAV HIGHLIGHT
========================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href").replace("#", "") === entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => observer.observe(section));

/* ==========================
   FADE IN ON SCROLL
========================== */
const fadeEls = document.querySelectorAll(
    ".app-card, .about-card, .contact-card > div"
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeEls.forEach(el => {
    el.classList.add("fade-init");
    fadeObserver.observe(el);
});


/* ==========================
   NUMBER COUNT ANIMATION
========================== */
const counters = document.querySelectorAll(".stat-number");
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.textContent;
            let current = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const interval = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(interval);
                } else {
                    el.textContent = current;
                }
            }, 30);
            countObserver.unobserve(el);
        }
    });
}, {
    threshold: 0.6
});

counters.forEach(counter => countObserver.observe(counter));

/* ==========================
   SMOOTH SCROLL OFFSET FIX
========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
