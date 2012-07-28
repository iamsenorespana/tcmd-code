var CustomScrollView = function() {
	
	var scrollView, container;
	
	// define a ScrollView container, that is 30dip tall, 
	// fills its parent's width, and scrolls horizontally
	scrollView = Ti.UI.createScrollView({
		
	});
	// define a container view to which you'll add the labels representing the various players
	// should be 26dip tall, with top/left/bottom/right all set to 2, with horizontal layout
	// width must be Ti.UI.SIZE on Android and 580 on iOS
		container = Ti.UI.createView({
			
		});
	
	// add the container to your scrollview
	scrollView.add(container);

	// require in your custom label module

	
	// Add the various labels to the container using new instances of the custom label object.
	// The players to add, and basename of the associated image files are as follows:
	/*
		'Harmon Killebrew', 'harmon'
		'Kent Hrbek', 'kent'
		'Kirby Puckett', 'kirby'
		'Rod Carew', 'rod'
		'Tony Oliva', 'tony'
	*/

	
	// add a click event listener to the scroll view; based on event source
	// you should then fire an App level event which is being listened for by your
	// scrollableview's event listener. Pass an array of images to be shown in 
	// the scrollableview

	// don't forget to return your scrollview
	return scrollView;
};
module.exports = CustomScrollView;