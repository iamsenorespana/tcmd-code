var ui = require_once('js/app/common/ui'),
	db = require_once('js/app/common/db');

function createTableViewRow(fugitive) {
	var tvrow = Ti.UI.createTableViewRow({
		leftImage:'images/placeholder_small.png',
		rightImage:'images/arrow.png',
		backgroundImage:'images/row_up.png',
		selectedBackgroundImage: 'images/row_down.png',
		className:'tvrow'
	});
	tvrow.add(ui.label(fugitive.name, {
		left:70
	}));
	tvrow.fugitive = fugitive;
	return tvrow;
}

exports.FugitiveTableView = function() {	
	var tv = Ti.UI.createTableView({
		minRowHeight:60,
		backgroundImage:'images/grain.png',
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		showingCaptured:false
	});
	
	function setTvData() {
		
		var tvData = [];
		var fugitives = db.list(tv.showingCaptured);
		for (var i = 0, l = fugitives.length; i<l; i++) {
			tvData.push(createTableViewRow(fugitives[i]));
		}
		tv.setData(tvData);
		
	}
	
	Ti.App.addEventListener('databaseUpdated',setTvData);
	setTvData();
	
	return tv;
};
