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
const comingSoonButton = document.querySelector(".coming-soon-button");
console.log(comingSoonButton.clientWidth);
comingSoonButton.style.width = `${intelDownloadButton.clientWidth}px`;
console.log(comingSoonButton.clientWidth);
// intelDownloadButton.addEventListener("mouseover", () => {
// 	intelDownloadButton.textContent = "coming soon";
// })

// intelDownloadButton.addEventListener("mouseleave", () => {
// 	setTimeout(() => {
// 		intelDownloadButton.textContent = "Download for intel Mac";
// 	}, 400);
// })