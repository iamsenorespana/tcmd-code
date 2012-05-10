var mainWin = require('ui').createMainWin();
mainWin.open();

Ti.App.addEventListener('resume', function() {
	Ti.App.fireEvent('updatePosition');
});
