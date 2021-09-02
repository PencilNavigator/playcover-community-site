const autoCloser = document.querySelector(".auto-closer");
const toggleAutoCloser = function (autoCloser) {
	autoCloser.classList.toggle("hidden");
};

// calc page height
const body = document.querySelector("body");
const html = document.documentElement;
const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

autoCloser.style.height = `${pageHeight}px`;

autoCloser.addEventListener("click", () => {
	if (isLangMenuOpen) {
		hideLangMenu(menu);
		isLangMenuOpen = false;
	}

	toggleAutoCloser(autoCloser);
});
