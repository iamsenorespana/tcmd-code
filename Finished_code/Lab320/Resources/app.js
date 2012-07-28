
// write the self-calling function to protect global scope 
(function() {

	var ApplicationWindow = require('ApplicationWindow');
	var applicationWindow = new ApplicationWindow();
		applicationWindow.open();
	
})();



