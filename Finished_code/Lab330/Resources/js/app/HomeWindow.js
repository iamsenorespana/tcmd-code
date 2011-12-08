exports.HomeWindow = function(args) {
	var ui = require_once('js/app/common/ui'),
		FugitiveTableView = require_once('js/app/FugitiveTableView').FugitiveTableView;

	var win = ui.window('fugitives',{
		exitOnClose:true
	});
	
	var addBtn = Ti.UI.createButton({
		backgroundImage:'images/add.png',
		height:30,
		width:30,
		right:10
	});
	win.addHeaderChild(addBtn);
	
	addBtn.addEventListener('click', function() {
		var AddWindow = require_once('js/app/AddWindow').AddWindow;
		new AddWindow().open({
			modal:Ti.Platform.osname === 'iphone'
		});
	});
	
	var tableView = new FugitiveTableView();
	tableView.bottom = 49;
	win.addChild(tableView);
	
	tableView.addEventListener('click', function(e) {
		var DetailWindow = require_once('js/app/DetailWindow').DetailWindow;
		new DetailWindow(e.rowData.fugitive).open({
			modal:Ti.Platform.osname === 'iphone'
		});
	});

	var tabs = ui.tabView({
		name:'fugitives',
		on:'images/fugitives_on.png',
		off:'images/fugitives_off.png'
	}, {
		name:'captured',
		on:'images/captured_on.png',
		off:'images/captured_off.png'
	}, {
		bottom:0
	});
	win.addChild(tabs);

	tabs.addEventListener('tabChange', function(e) {
		if (e.index === 0) {
			win.updateTitle('fugitives');
		}
		else {
			win.updateTitle('captured');
		}
	});
	
	return win;
};