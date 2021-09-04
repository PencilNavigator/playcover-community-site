const downloadButtons = document.querySelectorAll(".download-button");

const removePulse = (button) => {
	if (button.classList.contains("animate-pulse")) {
		button.classList.remove("animate-pulse");
	}
};

const pulseDownloadButtons = () => {
	downloadButtons.forEach((downloadButton) => {
		downloadButton.classList.toggle("animate-pulse");
		downloadButton.addEventListener("mouseover", (e) => {
			e.stopPropagation();
			removePulse(e.target);
		});
	});
};

if (localStorage.getItem("pulseDownload") == "true") {
	setTimeout(pulseDownloadButtons, 7000);
	downloadButtons.forEach((downloadButton) => {
		removePulse(downloadButton);
	});
	localStorage.setItem("pulseDownload", "false");
}
