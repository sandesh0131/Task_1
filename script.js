document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        toggleIcon();
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                toggleIcon();
            }
        });
    });

    function toggleIcon() {
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains("active")){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }

    // --- Prevent empty links from jumping to top ---
    const emptyLinks = document.querySelectorAll('a[href="#"]');
    emptyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Empty link clicked! Provide a valid URL to navigate.");
        });
    });

    // --- Accordion Logic ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(el => {
                el.classList.remove('active');
                el.querySelector('.accordion-content').style.display = 'none';
                el.querySelector('.icon-toggle i').classList.replace('fa-minus', 'fa-plus');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.accordion-content').style.display = 'block';
                item.querySelector('.icon-toggle i').classList.replace('fa-plus', 'fa-minus');
            }
        });
    });

});