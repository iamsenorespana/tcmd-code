// define a namespace for your app
var tv = {};

// write the self-calling function that define's your app's UI
(function() {
	// define the UI namespace for your app
	tv.ui = {};
	
	// define your app's main window
	tv.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow();
		
		// define the custom page heading here
		var pageHeading = Ti.UI.createLabel();
		win.add(pageHeading);
		
		/**
		  * Create a CommonJS module that will create and return a table row.
		  * Each row should have two image and two labels per the lab instructions
		  * Your images will need custom properties so that you can distinguish which received
		  * the click event and swap images accordingly
		  * 
		  * 	@param {Object} _params   Map of row parameters: rownum, primarylabel, secondarylabel, myImage
		  * 	@return {Object}    Returns the row.
		  * Then, require in the module
		  */		
		
		// declare an array to hold your table rows
		var tbldata = [];
		// use a loop to create at least 8 rows, instantiate a new custom row in each iteration

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView();
		
		table.setData(tbldata);
		win.add(table);

		// set the click event listener
		// if the source is the A/B/C letter, step to the next letter in sequence
		// if the source is the notification badge, swap the red/blue version
		table.addEventListener('click', function(e){});
		
		return win;
	}
	
})();

// create your app's main window and open it
var w = tv.ui.createApplicationWindow();
w.open();

