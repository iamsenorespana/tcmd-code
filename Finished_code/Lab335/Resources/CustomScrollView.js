var CustomScrollView = function() {
	
	var scrollView, container;
		
		
	// define a ScrollView container, that is 30dip tall, 
	// fills its parent's width, and scrolls horizontally
	scrollView = Titanium.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		top:0,
		width:Ti.UI.FILL,
		height:'30dip',
		backgroundColor:'green',
		scrollType: 'horizontal'
	});		
	
	// define a container view to which you'll add the labels representing the various players
	// should be 26dip tall, with top/left/bottom/right all set to 2, with horizontal layout
	// width must be Ti.UI.SIZE on Android and 580 on iOS
		container = Ti.UI.createView({
			height:'26dip',
			top:2,
			right:2,
			left:2,
			bottom:2,
			backgroundColor:'#fff',
			borderRadius:5,
			layout:'horizontal',
			/* platform-gotchas: must be set explicitly for scroll to work on iOS and calculated for Android */
			width:(Ti.Platform.osname=='android') ? Ti.UI.SIZE : 580
		});
	
	// add the container to your scrollview
	scrollView.add(container);
	
	var CustomLabel = require('CustomLabel');
	
	// Add the various labels to the container using the createCustomLabel() function.
	// The players to add, and basename of the associated image files are as follows:
	/*
		'Harmon Killebrew', 'harmon'
		'Kent Hrbek', 'kent'
		'Kirby Puckett', 'kirby'
		'Rod Carew', 'rod'
		'Tony Oliva', 'tony'
	*/
		container.add(new CustomLabel('Harmon Killebrew', 'harmon'));
		container.add(new CustomLabel('Kent Hrbek', 'kent'));
		container.add(new CustomLabel('Kirby Puckett', 'kirby'));
		container.add(new CustomLabel('Rod Carew', 'rod'));
		container.add(new CustomLabel('Tony Oliva', 'tony'));
	
	// add a click event listener to the scroll view; based on event source
	// you should then fire an App level event which is being listened for by your
	// scrollableview's event listener. Pass an array of images to be shown in the scrollableview
		scrollView.addEventListener('click', function(e){
			if(e.source.player) {
				Ti.App.fireEvent('playerChanged', {
					images:[
					'images/'+e.source.player+'1.jpg',
					'images/'+e.source.player+'2.jpg',
					'images/'+e.source.player+'3.jpg']
				})
			}
		});
		
	// don't forget to return your scrollview
	return scrollView;
			
};
module.exports = CustomScrollView;