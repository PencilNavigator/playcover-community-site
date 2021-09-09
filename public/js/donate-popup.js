const donatePopup = document.querySelector(".donate-popup");
const donateButtons = document.querySelectorAll(".donate-button");
const donateCloseButton = document.querySelector(".donate-close-button");
const donateNavButton = document.querySelector(".donate-nav-button");
const mobileDonateButton = document.querySelector(".mobile-donate-button");
const donateWrapper = document.querySelector(".donate-wrapper");
const donateModal = document.querySelector(".donate-modal");

function toggleDonatePopup() {
	donatePopup.classList.toggle("hidden");
	document.querySelector("body").classList.toggle("overflow-hidden");
}

function toggleDonatePopupMob() {
	// from the mobile-buttons js file
	mobileMenu.classList.toggle("hidden");
	toggleDonatePopup();
}

donateCloseButton.addEventListener("click", toggleDonatePopup);

donateNavButton.addEventListener("click", toggleDonatePopup);

mobileDonateButton.addEventListener("click", toggleDonatePopupMob);

donateButtons.forEach((donateButton) => {
	donateButton.addEventListener("click", toggleDonatePopup);
});
donateModal.addEventListener("click", (e) => {
	e.stopPropagation();
});

donateWrapper.addEventListener("click", () => {
	toggleDonatePopup();
});
