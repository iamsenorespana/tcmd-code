//Return a Titanium label either with the passed text, or with the given i18n key
function label(text) {
	return Ti.UI.createLabel({
		text:text,
		textAlign:'left',
		color:'#000',
		height:'auto',
		left: 0,
		top: 5
	});
}

// create the "fugitive" view
function createFugitivesView() {
	var view = Ti.UI.createView({
		width:'100%',
		height:'100%',
		backgroundColor:'transparent'
	});
	var fugitiveImage = Ti.UI.createImageView({
		image:'images/placeholder.png',
		top:10,
		height:90,
		width:90,
		borderRadius:5
	});
	view.add(fugitiveImage);
	
	var vitalsView = Ti.UI.createView({
		top:10,
		layout:'vertical'
	});	
	vitalsView.add(label('D.B. Cooper'));
	vitalsView.add(label('Missing since Nov. 24, 1971'));
	view.add(vitalsView);

	function setLayout() {
		if(Ti.App.Properties.getBool('rtl_preference')===true) {
			fugitiveImage.right = 10;
			fugitiveImage.left = null;
			vitalsView.right = 110;
			vitalsView.left = 10;
		} else {
			fugitiveImage.left = 10;
			fugitiveImage.right = null;
			vitalsView.left = 110;
			vitalsView.right = 10;
		}
	}
	setLayout();
	Ti.App.addEventListener('updatePosition', setLayout);
	return view;
}

exports.createMainWin = function() {
	var win = Ti.UI.createWindow({
		backgroundImage:'images/grain.png'
	});
	win.add(createFugitivesView());
	
	return win;
};


