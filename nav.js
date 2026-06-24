const nav = document.querySelector('.nav');

nav.innerHTML = `



<div id="progressBar"
    class="fixed top-0 left-0 h-1 bg-[#B12A2A] z-[9999]"
    style="width:0%">
</div>

<nav class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-sm">


<div class="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

    

    <a href="index.html" class="flex items-center">

        <img
            src="https://ik.imagekit.io/5f5fo2fhm/dr.kavitalogo.jpeg"
            alt="Kaizen Kidney Clinic"
            class="h-16 md:h-20 w-auto">

    </a>

    

    <div class="hidden lg:flex items-center gap-8 font-medium">

        <a href="index.html"
            class="nav-link text-[#1E5A88] hover:text-[#B12A2A] transition duration-300">
            Home
        </a>

        <a href="about.html"
            class="nav-link text-[#1E5A88] hover:text-[#B12A2A] transition duration-300">
            About
        </a>

        <a href="services.html"
            class="nav-link text-[#1E5A88] hover:text-[#B12A2A] transition duration-300">
            Services
        </a>

        <a href="conditions.html"
            class="nav-link text-[#1E5A88] hover:text-[#B12A2A] transition duration-300">
           What we treat
        </a>

        <a href="contact.html"
            class="nav-link text-[#1E5A88] hover:text-[#B12A2A] transition duration-300">
            Contact
        </a>

    </div>

    

    <div class="flex items-center gap-3">

        <a href="tel:+919326609636"
            class="hidden lg:flex border border-[#1E5A88]
            text-[#1E5A88]
            px-5 py-3 rounded-full
            hover:bg-[#1E5A88]
            hover:text-white
            transition duration-300">

            Call now

        </a>

        <a href="contact.html"
            class="hidden lg:flex bg-[#B12A2A]
            text-white
            px-6 py-3 rounded-full
            hover:scale-105
            transition duration-300">

            Book appointment

        </a>



        <button id="menu-btn"
            class="lg:hidden">

            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-[#1E5A88]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">

                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />

            </svg>

        </button>

    </div>

</div>

<div id="mobile-menu"
    class="fixed top-0 right-0 h-screen
    w-[85%] max-w-[380px]
    bg-white shadow-2xl z-[9999]
    transform translate-x-full
    transition-transform duration-300">

    <div class="flex justify-between items-center p-5 border-b">

        <h2 class="text-lg font-bold text-[#1E5A88]">
            Menu
        </h2>

        

    </div>

    <div class="flex flex-col p-6 font-medium">

        <a href="index.html"
            class="py-4 border-b border-slate-100">
            Home
        </a>

        <a href="about.html"
            class="py-4 border-b border-slate-100">
            About
        </a>

        <a href="services.html"
            class="py-4 border-b border-slate-100">
            Services
        </a>

        <a href="conditions.html"
            class="py-4 border-b border-slate-100">
            What We Treat
        </a>

        <a href="contact.html"
            class="py-4 border-b border-slate-100">
            Contact
        </a>

        <a href="contact.html"
            class="mt-6 bg-[#B12A2A]
            text-white text-center py-3 rounded-full">

            Book appointment

        </a>

    </div>

</div>


</nav>

`;
window.addEventListener("scroll", () => {

    if (!menu.classList.contains("translate-x-full")) {
        closeMenu();
    }

});

/// Elements
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

// Open Menu
btn.addEventListener("click", () => {
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
});

// Close Menu
function closeMenu() {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
}

// Menu Links Close
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Active Page Highlight
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        // link.classList.add(
        //     "text-[#B12A2A]",
        //     "font-bold"
        // );
    }
});

// Progress Bar
window.addEventListener("scroll", () => {

    const winScroll = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    const progressBar =
        document.getElementById("progressBar");

    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }

});

// Mobile Touch Scroll Close
document.addEventListener("touchmove", () => {

    if (!menu.classList.contains("translate-x-full")) {
        closeMenu();
    }

}, { passive: true });

// Desktop Resize Close
window.addEventListener("resize", () => {

    if (window.innerWidth >= 1024) {
        closeMenu();
    }

});