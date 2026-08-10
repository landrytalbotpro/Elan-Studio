document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ÉLAN STUDIO — STABLE SCRIPT
       ===================================================== */

    /* ---------- HEADER ---------- */

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }, { passive: true });
    }


    /* ---------- SCROLL REVEAL ---------- */

    const revealElements = document.querySelectorAll(
        ".intro-content, .section-heading, .service-card, .ritual-content, .philosophy-inner, .gallery-heading, .gallery-item, .testimonial-grid article, .booking-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* ---------- SMOOTH ANCHOR LINKS ---------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ---------- CURRENT YEAR ---------- */

    const yearElement = document.querySelector(".footer-bottom span");

    if (yearElement) {
        yearElement.textContent =
            `© ${new Date().getFullYear()} ÉLAN Studio`;
    }

});