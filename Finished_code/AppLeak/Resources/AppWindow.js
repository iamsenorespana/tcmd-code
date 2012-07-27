
function AppWindow(){

	var win, wrapper, test1btn, test2btn, test1, test2; 
	
	// Creating Window Objects
	win = Ti.UI.createWindow({ title: 'Memory Leaks' });
	
		test1 = require('test1.js');
		test2 = require('test2.js');
	
	
	wrapper = Ti.UI.createView({
		backgroundColor: '#ccc',
		layout: 'vertical'
	});
		test1btn = Ti.UI.createButton({
			title: 'Test 1',
			width: 200,
			height: 45,
			top: 50
		});
		test2btn = Ti.UI.createButton({
			title: 'Test 2',
			width: 200,
			height: 45,
			top: 50
		});
		
		function handleTest(_event) {
			if(_event.source.title === 'Test 2') {
				test2.build();
			} else if(_event.source.title === 'Test 1'){
				test1.build();
			}
		};
		
		test1btn.addEventListener('click', handleTest);
		test2btn.addEventListener('click', handleTest);
	
	wrapper.add(test1btn);
	wrapper.add(test2btn);
	
	
	win.add(wrapper);
	win.open();
	
};

module.exports = AppWindow;
