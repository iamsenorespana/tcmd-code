function Rating(max, initialRating) {
	// create a standard JS object to wrap our custom component
	// we'll be adding a method to it, and it's best to not extend
	// the Titanium proxies with methods.
	var instance = {};
	
	// add a view property, which holds a Titanium view set to 'horizontal'
	// layout and is 30 dp tall
	instance.view = Ti.UI.createView({
		layout:'horizontal',
		height: '30dp'
	});
	
	// private instance variable to hold current rating value	
	var rating;
	
	// private instance variable to hold an array of images							
	var stars = [];
	
	// Use a loop to define the 'max' number of star images
	// For each star, don't set the image property (you'll do that later)
	// Set height & width = 24, set left = 5
	for (var i = 0; i < max; i++) {
		// define the image view
		var star = Ti.UI.createImageView({
			height:'24dp',
			width:'24dp',
			left:'5dp'
		});
		
		// use a closure (self-calling function) to add
		// a click-event listener that calls setRating
		// passing the value of i+1
		(function() {
			var index = i;
			star.addEventListener('click', function() {
				setRating(index+1);
			});
		})();
		
		// add the star image to the stars array
		stars.push(star);
		// add the star image to the instance view
		instance.view.add(star);
	}
	
	// add a label to output the current rating value
	// and add it to the instance view
	var textValue = Ti.UI.createLabel({
		text:rating,
		height:'24dp',
		width:'auto',
		left:'5dp',
		color:'#787878',
		font: {
			fontSize:12
		}
	});
	instance.view.add(textValue);
	
	// define the setRating() function. It will accept a numeric
	// argument (between 1 and max), save that value in 'rating'
	// and set the image property of each of the star ImageViews
	// to either star_off.png or star_half.png (to represent fractional
	// rating values)
	function setRating(newRating) {
		// save newRating to the instance's rating property
		if(newRating > max) {
			newRating = max;
		}
		rating = newRating;
		
		// set the value of the text label to the rating		
		textValue.text = String(rating).replace('.0','');
		
		// use a loop to set the stars[i].image property
		// using the half-image for fractional values
		for (var i = 0, l = stars.length; i < l; i++) {
			if (i >= rating) {
				stars[i].image = 'images/star_off.png';
			}
			else if (rating > i && rating < i+1) {
				stars[i].image = 'images/star_half.png';
			}
			else {
				stars[i].image = 'images/star.png';
			}
		}
	}
	
	// expose setRating() as the instance object's changeRating() method
	instance.changeRating = setRating;
	
	//initialize view and return instance
	setRating(initialRating);
	return instance;
};

module.exports = Rating;