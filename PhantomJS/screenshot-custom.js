const page = require('webpage').create();
const url = 'http://www.google.com';

const screenConfig = {
	viewportSize: {
		width: 500,
		height: 500,
	},
	format: 'jpeg',
	quality: '80',
};

page.open(url, function beginNavigation() {
	setTimeout(function() {
		page.viewportSize = screenConfig.viewportSize;
		const fileName = `screenshot-${Date.now()}`.toString();
		const { format, quality } = screenConfig;
		page.render(fileName.concat('.jpg'), { format, quality });
		console.info('\x1b[32m', 'Screenshot done!');
		phantom.exit();
	}, 200);
});



