const downloadButtons = document.querySelectorAll('.download-buttons');

// download link to latest release
const downloadLink = 'https://github.com/iVoider/PlayCover/releases/download/0.7.6/PlayCover.0.7.6.zip';

downloadButtons.forEach((downloadButton) => {
	downloadButton.setAttribute('href', downloadLink);
});
