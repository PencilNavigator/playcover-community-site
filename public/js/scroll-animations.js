const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 1) {
        navBar.classList.remove("bg-gray-100");
        navBar.classList.remove("dark:bg-body");
        navBar.classList.add("dark:bg-nav-footer");
        navBar.classList.add("bg-white");
        navBar.classList.add("drop-shadow-md");
    } else {
        navBar.classList.add("bg-gray-100");
        navBar.classList.add("dark:bg-body");
        navBar.classList.remove("dark:bg-nav-footer");
        navBar.classList.remove("bg-white");
        navBar.classList.remove("drop-shadow-md");
    }

})