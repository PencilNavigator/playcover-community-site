import {fetchLastestDownload} from './downloads/releases.js';
const downloadButtons = document.querySelectorAll('.download-buttons');

// downloads link to latest release
const downloadLink = await fetchLastestDownload();

downloadButtons.forEach(async (downloadButton) => {
	downloadButton.setAttribute('href', downloadLink);
});
