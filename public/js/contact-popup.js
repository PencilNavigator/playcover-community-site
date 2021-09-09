const contactPopup = document.querySelector(".contact-popup");
const contactButtons = document.querySelectorAll(".contact-button");
const contactCloseButton = document.querySelector(".contact-close-button");
const contactNavButton = document.querySelector(".contact-nav-button");
const mobileContactButton = document.querySelector(".mobile-contact-button");
const contactWrapper = document.querySelector(".contact-wrapper");
const contactModal = document.querySelector(".contact-modal");

function toggleContactPopup() {
	contactPopup.classList.toggle("hidden");
}

function toggleContactPopupMob() {
	// from the mobile-buttons js file
	mobileMenu.classList.toggle("hidden");
	toggleContactPopup();
}

contactCloseButton.addEventListener("click", toggleContactPopup);

contactNavButton.addEventListener("click", toggleContactPopup);

mobileContactButton.addEventListener("click", toggleContactPopupMob);

contactButtons.forEach((contactButton) => {
	contactButton.addEventListener("click", toggleContactPopup);
});
contactModal.addEventListener("click", (e) => {
	e.stopPropagation();
});

contactWrapper.addEventListener("click", () => {
	toggleContactPopup();
});
