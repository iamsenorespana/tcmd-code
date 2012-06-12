(function() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	// create the ScrollableView and the ScrollView
	// and add them to the window
	
	var CustomScrollableView = require('CustomScrollableView');
	win.add(new CustomScrollableView());
	
	var CustomScollView = require('CustomScrollView');
	win.add(new CustomScollView());
	
	// open the window
	win.open();
})();
