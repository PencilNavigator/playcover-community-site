export const fetchLastestDownload = async () => {
	const url = 'https://api.github.com/repos/iVoider/PlayCover/releases';
	try {
		const req = await fetch(url);
		const data = await req.json();
		return data[0].assets[0].browser_download_url;
	} catch (e) {
		console.error(e);
		return 'https://github.com/iVoider/PlayCover/releases/latest';
	}
};
