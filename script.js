document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Contact Form Submission Handling
    const contactForm = document.getElementById("contactForm");
    const notification = document.getElementById("formNotification");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Page refresh hone se rokna

            const userName = document.getElementById("userName").value.trim();
            const userEmail = document.getElementById("userEmail").value.trim();

            if (userName && userEmail) {
                // Display Success Notification
                notification.textContent = `Thank you, ${userName}! Your message has been sent successfully.`;
                notification.className = "notification success";
                
                // Clear inputs
                contactForm.reset();

                // Auto hide message after 5 seconds
                setTimeout(() => {
                    notification.className = "notification hidden";
                }, 5000);
            }
        });
    }

    // 3. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });
});