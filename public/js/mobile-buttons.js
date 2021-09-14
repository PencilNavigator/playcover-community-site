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
