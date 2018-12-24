const page = require('webpage').create();
const url = 'http://www.google.com';

const Capture = (w, h, name) => {
	page.viewportSize = {
		width: w,
		height: h,
	}
	page.render(name.concat('.png'))
}

page.open(url, (status) => {
	setTimeout(() => {
		if (status === 'success') {
			Capture(67, 100, 'extra-small');
			Capture(769, 100, 'small');
			Capture(992, 100, 'medium');
			Capture(1201, 100, 'large');
		}
	}, 200);
	phantom.exit();
})