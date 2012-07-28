


exports.build = function() {
	var test1win = Ti.UI.createWindow({ title: 'Test 1 Win' }),
		table 	 = Ti.UI.createTableView({ top: 50 }),
		label 	 = Ti.UI.createLabel({ text: 'Some Label', color: '#eee', width: 100, height: 20, top: 15 }),
		close	 = Ti.UI.createButton({ title: 'Close' });
	
	var data = [
		{ title: 'Row 1' },
		{ title: 'Row 2' },
		{ title: 'Row 3' },
		{ title: 'Row 4' },
		{ title: 'Row 5' },
	];
	
	table.setData(data);
	
	close.addEventListener('click', function() {
		test1win.close();
	});
	
	function doSomething(_event) {
		Ti.API.info('event fired');
/*
		// removing these doesn't fix the leak
		table.setData(_event.data);
		label.text = _event.label;
*/
	}
	// adding this event listener causes a memory leak
	// as references remain valid after build() finishes
	Ti.App.addEventListener('bad:idea', doSomething);
	
	test1win.add(label);
	test1win.add(table);
	test1win.rightNavButton = close;
	
/*
	// removing the event listener does
	test1win.addEventListener('close', function() {
		Ti.App.removeEventListener('bad:idea', doSomething);
	});
*/
	
	test1win.open({ modal: true });
};
