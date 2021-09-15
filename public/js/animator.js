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

// coming soon hover text on intel button
const intelDownloadButton = document.querySelector(".intel-download-button");
const comingSoonButton = document.querySelector(".coming-soon-button");
console.log(comingSoonButton.clientWidth);
comingSoonButton.style.width = `${intelDownloadButton.clientWidth}px`;
console.log(comingSoonButton.clientWidth);
