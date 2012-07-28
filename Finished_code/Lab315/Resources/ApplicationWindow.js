
(function(){

	var win = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
	var Rating = require('rating');
	// need to instantiate Rating, supply the required
	// parameters, and add its view member to win
	win.add(new Rating(5, 2.5).view);
	
	win.open();
		
	
})();
