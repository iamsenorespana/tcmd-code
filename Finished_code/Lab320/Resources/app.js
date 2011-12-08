// define a namespace for your app
var tv = {};

// write the self-calling function that define's your app's UI
(function() {
	// define the UI namespace for your app
	tv.ui = {};
	
	// define your app's main window
	tv.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundImage:'images/gradientBackground.png'
		});
		// define the custom page heading here
		var pageHeading = Ti.UI.createLabel({
			text: 'Custom Table',
			color:'#3E3F87',
			font:{
				fontSize:18,
				fontWeight:'bold'
			},
			top:1,
			left:10,
			height:35
		});
		win.add(pageHeading);
		
		/**
		  * Write a function named makeRow() that will create and return a table row.
		  * Each row should have two image and two labels per the lab instructions
		  * Your images will need custom properties so that you can distinguish which received
		  * the click event and swap images accordingly
		  * 
		  * makeRow()
		  * 	@param {Object} _params   Map of row parameters: rownum, primarylabel, secondarylabel, myImage
		  * 	@return {Object}    Returns the row.
		  */		
		var makeRow = function(/*Object*/ _params) {
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
		
		// declare an array to hold your table rows
		var tbldata = [];
		// use a loop to create at least 8 rows
		for(var i=0;i<8;i++) {
			tbldata.push(makeRow({
				rownum: i,
				primarylabel: 'This is row '+i,
				secondarylabel: 'Subtitle '+i,
				myImage:(i % 2 === 0) ? 'a' : 'b'
			}));
		}
		tbldata.push(makeRow({
			rownum: 'last',
			primarylabel: 'This is the last row',
			secondarylabel: 'The last subtitle',
			myImage:'c'
		}));

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width:'90%',
			height:'85%',
			top:45,
			backgroundColor:'transparent',
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
		});
		
		table.setData(tbldata);
		win.add(table);

		// set the click event listener
		// if the source is the A/B/C letter, step to the next letter in sequence
		// if the source is the notification badge, swap the red/blue version
		table.addEventListener('click', function(e){
			switch(e.source.myImage) {
				case 'a':
					e.source.image = 'images/imageB.png';
					e.source.myImage = 'b';
				break;
				case 'b':
					e.source.image = 'images/imageC.png';
					e.source.myImage = 'c';
				break;
				case 'c':
					e.source.image = 'images/imageA.png';
					e.source.myImage = 'a';
				break;
				case 'blue':
					e.source.image = 'images/notificationUnreadBadge.png';
					e.source.myImage = 'red';
				break;
				case 'red':
					e.source.image = 'images/notificationBadge.png';
					e.source.myImage = 'blue';
				break;
			}
		});
		
		return win;
	}
	
})();

// create your app's main window and open it
var w = tv.ui.createApplicationWindow();
w.open();

