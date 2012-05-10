exports.newHV = function(title) {
	// our custom UI component is built from a Ti.UI.View
	var v = Ti.UI.createView({
		backgroundColor:'#B32D00',
		height:40,
		top:0
	});
	var titleLabel = Ti.UI.createLabel({
		left:0,
		width:'100%',
		text: title,
		color: 'white',
		textAlign: 'center',
		font: {
			fontWeight:'bold'
		}
	});
	v.add(titleLabel);
	// We can add methods to our component
	v.updateTitle = function(title){
		titleLabel.animate({
			left:-1000,
			duration:500
		}, function() {
			titleLabel.text=title;
			titleLabel.animate({
				left:0,
				duration:500
			});
		});
		titleLabel.text = title;
		v.fireEvent('titleUpdated', {message:'Title updated'});
	};
	return v;
}
