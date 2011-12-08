var ui = require_once('js/app/common/ui'),
	Fugitive = require_once('js/app/model/Fugitive').Fugitive,
	db = require_once('js/app/common/db');

exports.AddWindow = function(args) {	
	var win = ui.window('new_fugitive');
	ui.addBackButtonView(win);

	var webview = Ti.UI.createWebView({
		url:'html/addForm.html',
		backgroundColor:'#787878'
	});
	win.addChild(webview);
	
	// Add an eventListener to capture the data sent from the web form
	// it should instantiate a Fugitive object based on the event data received
	// then should add that person to the database
	// finally, it should close the current window
	Ti.App.addEventListener();
	
	return win;
};