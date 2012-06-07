var CustomRow = function(/*Object*/ _params) {
	var row = Ti.UI.createTableViewRow({
		backgroundImage:'images/middleRow.png',
		selectedBackgroundImage:'images/middleRowSelected.png',
		backgroundColor:'transparent',
		height:74
	});
	var rowImage = Ti.UI.createImageView({
		image:(_params.rownum % 2 == 0) ? 'images/imageA.png' : 'images/imageB.png',
		height:64,
		width:64,
		top:8,
		left:8,
		myImage:_params.myImage
	});
	row.add(rowImage);
	if(_params.rownum == 0) {
		row.backgroundImage = 'images/topRow.png';
		row.selectedBackgroundImage = 'images/topRowSelected.png';
	} else if(_params.rownum == 'last') {
		row.backgroundImage = 'images/bottomRow.png';
		row.selectedBackgroundImage = 'images/bottomRowSelected.png';
		rowImage.image='images/imageC.png';		
	}
	var primaryLabel = Ti.UI.createLabel({
		text:_params.primarylabel,
		font:{
			fontSize:16,
			fontWeight:'bold'
		},
		color:'black',
		top:20,
		left:75,
		height:'auto'
	});
	row.add(primaryLabel);
	var secondaryLabel = Ti.UI.createLabel({
		text:_params.secondarylabel,
		font:{
			fontSize:13,
			fontWeight:'bold'
		},
		color:'black',
		top:42,
		left:75,
		height:'auto'
	});
	row.add(secondaryLabel);
	var notificationImage = Ti.UI.createImageView({
		image:'images/notificationBadge.png',
		height:22,
		width:25,
		top:32,
		right:10,
		myImage:'blue'
	});
	row.add(notificationImage);
	return row;
};

module.exports = CustomRow;