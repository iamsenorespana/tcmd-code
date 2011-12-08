var myapp = {};

(function() {
	myapp.ui = {};
	
	myapp.ui.createApplicationWindow = function(_color) {
		// must be a heavyweight window to capture the android:back event
		// so set something like fullscreen:false
		var win = Ti.UI.createWindow({
			title:'Hello world',
			backgroundColor:_color,
			fullscreen:false,
			exitOnClose:true
		});
		var winlabel = Ti.UI.createLabel({
			text:'Tap the Android Back button to close app',
			font:{ fontWeight:'bold', fontSize:20 },
			color: 'black',
			left:10,
			right:10
		});
		win.add(winlabel);
		
		var myview = Ti.UI.createView({
			width:'90%',
			height:'90%',
			backgroundColor:'white'
		});
		var label = Ti.UI.createLabel({
			text:'Tap the Android Back button to close this white View and show the underlying red Window',
			font:{ fontWeight:'bold', fontSize:20 },
			color: 'black',
			left:10,
			right:10
		});
		myview.add(label);
		
		// Need to define a function for closing the view so that we can remove the listener later
		closeView = function() {
			myview.hide();
			// remove the event listener on the window so that we can hit the
			// Back button again to close the app
			// existOnClose:true is required on the window for this to work
			win.removeEventListener('android:back',closeView);
		};
		
		win.addEventListener('android:back',closeView);
		win.add(myview);
		
		return win;
	}
})();

myapp.mainwin = myapp.ui.createApplicationWindow('red');
myapp.mainwin.open();
