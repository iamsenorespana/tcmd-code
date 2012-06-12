var CustomLabel = function(fullName, imageFileName) {
	// a helper function to create labels representing various baseball players
	var label = Ti.UI.createLabel({
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		color:'#000',
		text:fullName,
		left:10,
		top:0,  /* new */
		player:imageFileName			
	});
	return label;
};
module.exports = CustomLabel;