if (localStorage.getItem("visited") == null) {
	localStorage.setItem("visited", true);

	themeBtn.classList.add("animate-pulse");
	setTimeout(() => {
		themeBtn.classList.remove("animate-pulse");
	}, 6000);

	themeBtnMob.classList.add("animate-pulse");
	setTimeout(() => {
		themeBtnMob.classList.remove("animate-pulse");
	}, 6000);
}

const intelDownloadButton = document.querySelector(".intel-download-button");

intelDownloadButton.addEventListener("mouseover", () => {
	intelDownloadButton.textContent = "coming soon";
})

intelDownloadButton.addEventListener("mouseleave", () => {
	setTimeout(() => {
		intelDownloadButton.textContent = "Download for intel Mac";
	}, 400);
})