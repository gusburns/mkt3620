// Shared navigation for all pages

const navContainer = document.getElementById("site-nav");

if (navContainer) {
    navContainer.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="index.html" class="logo">GUS BURNS</a>

                <button
                    class="menu-toggle"
                    id="menu-toggle"
                    aria-label="Open navigation menu"
                    aria-expanded="false">
                    ☰
                </button>

                <ul class="nav-links" id="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="experience.html">Experience</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;

    // Identify the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close mobile menu after clicking a link
    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
