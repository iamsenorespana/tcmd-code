
var ot = {};

(function(){
	
	ot.ui = {};
	ot.controller = {};
	ot.model = {};
	
	ot.model.desc = [];
	ot.model.desc[0] = 'Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan\'s first number one in Britain since New Morning in 1970.';
	ot.model.desc[1] = "Rumors of the album, reported in Rolling Stone magazine, came as a surprise, with no official press release until March 16, 2009 — less than two months before the album's release date.";
	ot.model.desc[2] = "In a conversation with music journalist Bill Flanagan, published on Bob Dylan's official website, Flanagan suggested a similarity of the new record to the sound of Chess Records and Sun Records, which Dylan acknowledged as an effect of 'the way the instruments were played.'";
	
	ot.model.img = [];
	ot.model.img[0] = 'images/dylan.png';
	ot.model.img[1] = 'images/dylan1.png';
	ot.model.img[2] = 'images/dylan2.png';
	
	ot.ui.lblArtist = Ti.UI.createLabel({
			text: 'Bob Dylan',
			width: 320,
			height: Ti.UI.SIZE,
			top: 260,
			textAlign: 'center',
			font: {fontSize: 22, fontFamily: 'AmericanTypewriter-Bold'}
		});
		
	ot.ui.audioControls = Ti.UI.createView({
		backgroundColor: '#333',
		backgroundImage: ot.model.img[0],
		width: 240,
		height: 240,
		top: 10
	})
	
	ot.ui.additionalCopy = Ti.UI.createLabel({
		text: ot.model.desc[0],
		width: 240,
		height: 240,
		bottom: 10,
		font: {fontSize: 10, fontFamily: 'AmericanTypewriter'}
	});

	
	ot.ui.createWindow = function() {
		
		var win = Ti.UI.createWindow({
			backgroundColor: '#fff',
			orientationModes: [
				Ti.UI.LANDSCAPE_LEFT,
				Ti.UI.LANDSCAPE_RIGHT,
				Ti.UI.PORTRAIT,
				Ti.UI.UPSIDE_PORTRAIT
			]
		});
	
		win.add(ot.ui.lblArtist);
		win.add(ot.ui.additionalCopy);
		win.add(ot.ui.audioControls);
		
		return win;
	}
	
})();

var w = ot.ui.createWindow();
	w.open();
