//UI Helpers
//----------
//extend on object with the properties of one or more others (thanks, Dojo!)
var empty = {};
function mixin(target,source) {
	var name, s, i;
	for(name in source) {
		if (source.hasOwnProperty(name)) {
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))) {
				target[name] = s;
			}
		}
	}
	return target; // Object
}

function extend(obj,props) {
	if(!obj) {
		obj = {};
	}
	for(var i=1, l=arguments.length; i<l; i++) {
		mixin(obj, arguments[i]);
	}
	return obj; // Object
}
exports.extend = extend;

//simple helper to branch values based on OS
var osname = Ti.Platform.osname;
function os(androidValue,iosValue) {
	return (osname === 'android') ? androidValue : iosValue;
}

exports.os = os;

//Shared values for common use in view creation
var fontFamily = os('Droid Mono','Helvetica Neue');

//keystroke savings for view creation
function view(args) {
	return Ti.UI.createView(args);
}

exports.view = view;

//Return a Titanium label either with the passed text, or with the given i18n key
function label(text,args) {
	return Ti.UI.createLabel(extend({
		text:L(text,text),
		textAlign:'left',
		color:'#000',
		height:'auto',
		font: {
			fontFamily:fontFamily
		}
	},args|| {}));
};

exports.label = label;

//return a window with a custom header
function createWin(title,args) {
	var win = Ti.UI.createWindow(extend({
		backgroundImage:'images/grain.png',
		navBarHidden:true, //hides the navigation bar on the window - also has the effect of associating a window with an activity
		orientationModes: [
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT,
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT
		]
	},args|| {}));

	var header = view({
		top:0,
		backgroundImage:'images/navbar.png',
		height:44
	});
	win.add(header);

	var headerTitle = label(title, {
		color:'#fff',
		textAlign:'center',
		font: {
			fontSize:18,
			fontWeight:'bold',
			fontFamily:fontFamily
		}
	})
	header.add(headerTitle);

	//create an API on this window to add views underneath our custom header
	var container = view({
		top:44,
		left:0,
		right:0,
		bottom:0
	});
	win.add(container);
	win.addChild = function(child) {
		container.add(child);
	};
	//create an API to add items to the window header
	win.addHeaderChild = function(child) {
		header.add(child);
	};
	//create an API to set the title of our custom window
	win.updateTitle = function(title) {
		headerTitle.text = L(title,title);
	};
	return win;
};

exports.window = createWin;

//create an image view - save keystrokes
function img(args) {
	return Ti.UI.createImageView(args);
}

exports.img = img;

//Create a custom tab bar
function tabView(tabOne,tabTwo,options) {
	var tabs = view(extend({
		height:49,
		backgroundImage:'images/tab_bg.png'
	},options|| {}));

	//track tab index as state on this object
	tabs.tabIndex = 0;

	//use an inner function to create tabs in the bar
	function createTab(index,options) {
		var container = view({
			width:Ti.Platform.displayCaps.platformWidth/2,
			height:49
		});

		var icon = img({
			image:options.on,
			height:'auto',
			width:'auto',
			top:5
		});
		container.add(icon);

		var title = label(options.name, {
			bottom:2,
			color:'#fff',
			width:'auto',
			font: {
				fontSize:10,
				fontFamily:fontFamily
			}
		});
		container.add(title);

		if (index === 0) {
			container.left = 0;
			container.backgroundImage = 'images/tab.png';
		} else {
			container.right = 0;
			icon.image = options.off;
		}

		//fire the tab change event when one of the tabs is clicked
		container.addEventListener('click', function() {
			tabs.fireEvent('tabChange', {
				index:index
			});
			tabs.tabIndex = index;
		});
		//provide an API to toggle the necessary properties of a tab for (de)selection
		container.toggle = function(on) {
			icon.image = (on) ? options.on : options.off;
			container.backgroundImage = (on) ? 'images/tab.png' : '';
		};
		//resize tabs on orientation change
		Ti.Gesture.addEventListener('orientationchange', function(e) {
			container.width = Ti.Platform.displayCaps.platformWidth/2;
		});
		return container;
	}

	var tab1 = createTab(0,tabOne);
	var tab2 = createTab(1,tabTwo);
	tabs.add(tab1);
	tabs.add(tab2);

	tabs.addEventListener('tabChange', function(e) {
		if (e.index === 0) {
			tab1.toggle(true);
			tab2.toggle(false);
		} else {
			tab1.toggle(false);
			tab2.toggle(true);
		}
	});
	return tabs;
}
exports.tabView = tabView;

//create a back button which exits the given window - use our custom window object
exports.addBackButtonView = function(win) {
	var backBtn = view({
		width:70,
		height:30,
		backgroundImage:'images/back.png',
		left:5
	});
	backBtn.add(label('Back',{
		textAlign:'center',
		color:'#fff',
		font:{
			fontWeight:'bold'
		}
	}));
	win.addHeaderChild(backBtn);
	
	backBtn.addEventListener('click', function() {
		win.close();
	});
};

exports.loadingWindow = function() {
	var window = Ti.UI.createWindow({
		height:Ti.Platform.displayCaps.platformHeight/2,
		width:Ti.Platform.displayCaps.platformWidth/2,
		backgroundColor:'#787878',
		borderRadius:10,
		layout:'vertical',
		zIndex:99999
	});
	
	window.add(img({
		image:'images/target.png',
		height:50,
		width:50,
		top:10
	}));
	
	window.add(label('Loading...',{
		color:'#fff'
	}));
	
	return window;
};
