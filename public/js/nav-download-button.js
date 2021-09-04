const downloadNavButton = document.querySelector(".download-nav-button");

downloadNavButton.addEventListener("click", () => {
	localStorage.setItem("pulseDownload", "true");
});
