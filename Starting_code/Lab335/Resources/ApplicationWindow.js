function ApplicationWindow(){
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
	// create the ScrollableView and the ScrollView
	// and add them to the window
	var CustomScollView = require('CustomScrollView');		
	var CustomScrollableView = require('CustomScrollableView');
	
	
	win.add(new CustomScollView());
	win.add(new CustomScrollableView());
	
	// return the window object
	return win;
};

module.exports = ApplicationWindow;
