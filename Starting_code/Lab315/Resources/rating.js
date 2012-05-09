function Rating(max, initialRating) {
	// create a standard JS object to wrap our custom component
	// we'll be adding a method to it, and it's best to not extend
	// the Titanium proxies with methods.
	var instance = {};
	
	// add a view property, which holds a Titanium view set to 'horizontal'
	// layout and is 30 dp tall
	
	// add a private instance variable to hold current rating value	
	
	// add a private instance variable to hold an array of images							
	
	// Use a loop to define the 'max' number of star images
	// For each star, don't set the image property (you'll do that later)
	// Set height & width = 24, set left = 5
	for (var i = 0; i < max; i++) {
		// define the image view
		
		// use a closure (self-calling function) to add
		// a click-event listener that calls setRating
		// passing the value of i+1
		
		// add the star image to the stars array

		// add the star image to the instance view

	}
	
	// add a label to output the current rating value
	// and add it to the instance view

	
	// define the setRating() function. It will accept a numeric
	// argument (between 1 and max), save that value in 'rating'
	// and set the image property of each of the star ImageViews
	// to either star_off.png or star_half.png (to represent fractional
	// rating values)
	function setRating(newRating) {
		// save newRating to the instance's rating property
		
		// set the value of the text label to the rating		
		
		// use a loop to set the stars[i].image property
		// using the half-image for fractional values
	}
	
	// expose setRating() as the instance object's changeRating() method
	
	//initialize view and return instance

};

module.exports = Rating;