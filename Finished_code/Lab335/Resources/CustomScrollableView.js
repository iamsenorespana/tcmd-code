var CustomScrollableView = function() {
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
		top:0,
		height:Ti.UI.FILL,
		views:[v1,v2,v3],
		showPagingControl:true,
		pagingControlHeight:30,
		backgroundColor: '#000'
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

module.exports = CustomScrollableView;
