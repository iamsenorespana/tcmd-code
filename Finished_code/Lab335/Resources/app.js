var sv = {};

(function() {
	sv.ui = {};
	
	sv.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow();
		// create the ScrollableView and the ScrollView
		// and add them to the window
		win.add(sv.ui.createCustomScrollableView());
		win.add(sv.ui.createCustomScrollView());
		return win;
	};
	sv.ui.createCustomScrollableView = function() {
		// declare three ImageView objects to show the images/harmon1.jpg, harmon2.jpg, and harmon3.jpg images
		var v1 = Ti.UI.createImageView({
			image:'images/harmon1.jpg'
		});
		var v2 = Ti.UI.createImageView({
			image:'images/harmon2.jpg'
		});
		var v3 = Ti.UI.createImageView({
			image:'images/harmon3.jpg'
		});
		// declare your scrollable view and set its views
		var scrollableview = Titanium.UI.createScrollableView({
			top:30,
			views:[v1,v2,v3],
			showPagingControl:true,
			pagingControlHeight:30
		});
		
		// add a function that updates the image property of the three child views
		// function should accept an array of images
		var updateSVImages = function(imgArray) {
			scrollableview.views[0].image = imgArray[0];
			scrollableview.views[1].image = imgArray[1];
			scrollableview.views[2].image = imgArray[2];
		};
		
		// add an App level event listener that calls your update images function
		// it should also display the first image view within the ScrollableView
		Ti.App.addEventListener('playerChanged', function(e) {
			updateSVImages(e.images);
			scrollableview.scrollToView(0);
		});
		return scrollableview;
	};
	
	sv.ui.createCustomLabel = function(fullName, imageFileName) {
		// a helper function to create labels representing various baseball players
		var label = Ti.UI.createLabel({
			width:'auto',
			height:'auto',
			color:'#000',
			text:fullName,
			left:5,
			player:imageFileName			
		});
		return label;
	};
	
	sv.ui.createCustomScrollView = function() {
		// define a ScrollView container
		var scrollView = Titanium.UI.createScrollView({
			contentWidth:'auto',
			contentHeight:'auto',
			top:0,
			height:30,
			backgroundColor:'green'
		});		
		// a View to which you'll add the labels representing the various players
		var container = Ti.UI.createView({
			height:26,
			top:2,
			right:2,
			left:2,
			bottom:2,
			backgroundColor:'#fff',
			borderRadius:5,
			layout:'horizontal',
			width:580
		});
		scrollView.add(container);
		
		// Add the various labels to the container using the createCustomLabel() function.
		// The players to add, and basename of the associated image files are as follows:
		/*
			'Harmon Killebrew', 'harmon'
			'Kent Hrbek', 'kent'
			'Kirby Puckett', 'kirby'
			'Rod Carew', 'rod'
			'Tony Oliva', 'tony'
		*/
		container.add(sv.ui.createCustomLabel('Harmon Killebrew', 'harmon'));
		container.add(sv.ui.createCustomLabel('Kent Hrbek', 'kent'));
		container.add(sv.ui.createCustomLabel('Kirby Puckett', 'kirby'));
		container.add(sv.ui.createCustomLabel('Rod Carew', 'rod'));
		container.add(sv.ui.createCustomLabel('Tony Oliva', 'tony'));
		
		// add a click event listener to the scroll view; based on event source
		// you should then fire an App level event which is being listened for by your
		// scrollableview's event listener. Pass an array of images to be shown in the scrollableview
		scrollView.addEventListener('click', function(e){
			if(e.source.player) {
				Ti.App.fireEvent('playerChanged', {images:[
					'images/'+e.source.player+'1.jpg',
					'images/'+e.source.player+'2.jpg',
					'images/'+e.source.player+'3.jpg']})
			}
		});
		return scrollView;		
	};
	
})();

// declare and open the app's main window
sv.appWindow = sv.ui.createApplicationWindow();
sv.appWindow.open();
