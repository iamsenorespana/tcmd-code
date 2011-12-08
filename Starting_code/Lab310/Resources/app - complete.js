//App Namespace
var ct = {};

(function() {
	
	//UI 
	ct.ui = {};
	
	ct.ui.createCustomTab = function() {
		var tg = Ti.UI.createTabGroup();
		
		var win = Ti.UI.createWindow({
			width: 320,
			height: 60,
			bottom: 0
		});
		
		var bkgImg = Ti.UI.createImageView({
			image: 'images/tabBkg.png',
			width: 'auto',
			height: 'auto', 
			left: -320
		})
		win.add(bkgImg);

		/*
		This function controls the make of the tabs. This function does
		all the heavy lifting of the application
		*/
		var makeTab = function(/*Object*/ obj) {
			var tt = Ti.UI.createTab({
				title: obj.title,
				window: obj.window
			})
			tg.addTab(tt);
			
			var tview = Ti.UI.createView({
				width: 100,
				height: 45,
				bottom: 2,
				left: obj.loc
			})
			
			tview.addEventListener('click', function(e) {
				animateCt(obj.animate);
				tg.setActiveTab(obj.active);
			});
			
			
			var img = Ti.UI.createImageView({
				image: "images/"+obj.img,
				width: "auto",
				height: "auto",
				top: 0
			});
			tview.add(img);
	
			var lbl = Ti.UI.createLabel({
				text: obj.title,
				font: {fontWeight: 'bold', fontSize: 10},
				color: '#fff',
				width: 'auto',
				height: 'auto',
				bottom: 0,
				shadowColor: '#000',
				shadowOffset: {x:0, y:1}
			});
			tview.add(lbl);
			
			win.add(tview);
			
		}
		
		/*
		The simple animation function to move the background image of the tab
		*/
		var animateCt = function(loc) {
			var a = Ti.UI.createAnimation();
				a.left = loc;
				a.duration = 500;
			bkgImg.animate(a);
		}
		
		
		/*
		This is the simple object to create the tabs. A great way to improve this is to auctomate
		the loc, and animate, by using the built in functions to determine platform width and
		quantity of items you want.
		*/
		makeTab({
			loc: 20,
			animate: -320,
			title: 'facebook',
			img: 'Facebook.png',
			active: 0,
			window: ct.ui.createMainWindow()
		});
		
		makeTab({
			loc: 200,
			animate: -140,
			title: 'twitter',
			img: 'Twitter.png',
			active: 1,
			window: ct.ui.createSecondaryWindow()
		});
		
		tg.open();
		
		return win;
	}
	
	/*
	This is the main window that is intially launched, these windows can 
	be externalized for better coding composition, for this demo
	there are here for ease
	*/
	ct.ui.createMainWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: '#ddd',
			title: 'Facebook'
		})
		
		return win;
	}
	
	
	ct.ui.createSecondaryWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: '#ccc',
			title: 'Twitter'
		})
		
		return win;
	}
	
	
})();

var w = ct.ui.createCustomTab();
w.open();