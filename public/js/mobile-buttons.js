// // grab everything we need
const mobileBtn = document.querySelector("button.mobile-button");
const mobileMenu = document.querySelector(".mobile-menu");
let isMobileMenuOpen = false;

const toggleMobileMenu = function () {
	mobileMenu.classList.toggle("hidden");
};


// add event listeners
mobileBtn.addEventListener("click", () => {
	toggleMobileMenu();
	toggleAutoCloser(autoCloser);
	if (isMobileMenuOpen == false) {
		isMobileMenuOpen = true;
	} else {
		isMobileMenuOpen = false;
	}

	if (!mobileLangMenu.classList.contains("hidden")) {
		toggleMobLangMenu();
	}
});

const htmlTagMob = document.querySelector("html");
const themeBtnMob = document.querySelector(".switch-theme-mobile");

themeBtnMob.addEventListener("click", () => {
	// stop pulse animation
	if (themeBtnMob.classList.contains("animate-pulse")) {
		themeBtnMob.classList.remove("animate-pulse");
	}
	let htmlClasses = htmlTagMob.classList;
	if (localStorage.theme == "dark") {
		htmlClasses.remove("dark");
		localStorage.removeItem("theme");
	} else {
		htmlClasses.add("dark");
		localStorage.theme = "dark";
	}
});
