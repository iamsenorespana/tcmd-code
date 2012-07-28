
// write the self-calling function to protect the global scope
(function() {

	var ApplicationWindow = require('ApplicationWindow');
	var applicationWindow = new ApplicationWindow();
		applicationWindow.open();
	
})();



