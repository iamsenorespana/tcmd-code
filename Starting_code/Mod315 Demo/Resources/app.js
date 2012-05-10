var win = Ti.UI.createWindow();

// require our custom headerview component library
var headerview = require('headerview');

// instantiate the custom component
var header = headerview.newHV('My Great App');
win.add(header);

// create a button that when clicked will call custom component functionality
var btn = Ti.UI.createButton({
	height:40,
	width:200,
	title:'Click me'
});
btn.addEventListener('click', function(){
	// call our component's custom method
	header.updateTitle('New Header Title');
});
win.add(btn);
win.open();
