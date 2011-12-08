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
	
	Ti.App.addEventListener('fugitiveSaved', function(e) {
		var Fugitive = require_once('js/app/model/Fugitive').Fugitive;
		var fugitive = new Fugitive(e);
		db.add(fugitive);
		win.close();
	});
	
	return win;
};