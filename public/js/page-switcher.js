const homeSection = document.querySelector("#home-section");
const homeButton = document.querySelector("#home-button");
const legalButton = document.querySelector("#legal-button");
const legalSection = document.querySelector("#legal-section");

let activeSection = homeSection;
let activeButton = homeButton;

let localPageStorage = localStorage.getItem("currentPage");

const highlightNavButton = (navButton) => {
	navButton.classList = "text-yellow-500 border-b-2 border-yellow-500 py-3";
};

const unHighlightNavButton = (navButton) => {
	navButton.classList = "text-gray-800 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-150";
};

if (localPageStorage == null) {
	localPageStorage = "home";
} else if (localPageStorage == "legal") {
	homeSection.classList.add("hidden");
	legalSection.classList.remove("hidden");
	unHighlightNavButton(homeButton);
} else if (localPageStorage == "home") {
	homeSection.classList.remove("hidden");
	legalSection.classList.add("hidden");
}

legalButton.addEventListener("click", () => {
	window.scrollTo(0, 0);
	unHighlightNavButton(activeButton);
	activeSection.classList.add("hidden");
	legalSection.classList.remove("hidden");
	localStorage.setItem("currentPage", "legal");
	activeSection = legalSection;
});

homeButton.addEventListener("click", () => {
	window.scrollTo(0, 0);
	highlightNavButton(homeButton);
	activeSection.classList.add("hidden");
	homeSection.classList.remove("hidden");
	localStorage.setItem("currentPage", "home");
	activeSection = homeSection;
});

// TEMP

console.log(homeSection.classList);
