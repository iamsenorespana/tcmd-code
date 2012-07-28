var CustomLabel = function(fullName, imageFileName) {
	// a helper function to create labels representing various baseball players
	// height & width should be set to SIZE, left = 10 for some padding,
	// text is fullName, custom property 'player' = imageFileName
	var label = Ti.UI.createLabel({
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		color:'#000',
		text:fullName,
		left:10,
		top:0,  /* new */
		player:imageFileName			
	});
	
	// don't forget to return your label
	return label;
};
module.exports = CustomLabel;