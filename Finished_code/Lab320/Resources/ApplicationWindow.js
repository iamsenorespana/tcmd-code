
function ApplicationWindow(){
	
		var win, pageHeading, tbldata, table;
		
		
		win = Ti.UI.createWindow({
			backgroundImage:'images/gradientBackground.png'
		});
		
			// define the custom page heading here
			pageHeading = Ti.UI.createLabel({
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
		  * Create a CommonJS module that will create and return a table row.
		  * Each row should have two image and two labels per the lab instructions
		  * Your images will need custom properties so that you can distinguish which received
		  * the click event and swap images accordingly
		  * 
		  * 	@param {Object} _params   Map of row parameters: rownum, primarylabel, secondarylabel, myImage
		  * 	@return {Object}    Returns the row.
		  * 
		  * Then, require in the module
		  */		
		var CustomRow = require('CustomRow');
		
		// declare an array to hold your table rows
		tbldata = [];
		
		// use a loop to create at least 8 rows, instantiate a new custom row in each iteration
			for(var i=0;i<8;i++) {
				tbldata.push(new CustomRow({
					rownum: i,
					primarylabel: 'This is row '+i,
					secondarylabel: 'Subtitle '+i,
					myImage:(i % 2 === 0) ? 'a' : 'b'
				}));
			}
			tbldata.push(new CustomRow({
				rownum: 'last',
				primarylabel: 'This is the last row',
				secondarylabel: 'The last subtitle',
				myImage:'c'
			}));

			// define the tableview and assign its data/rows here
			table = Ti.UI.createTableView({
				width:'90%',
				height:'85%',
				top:45,
				backgroundColor:'transparent',
				separatorStyle:(Ti.Platform.osname=='iphone') ? Titanium.UI.iPhone.TableViewSeparatorStyle.NONE : null
			});
			
			table.setData(tbldata);
		win.add(table);

		// set the click event listener
		// if the source is the A/B/C letter, step to the next letter in sequence
		// if the source is the notification badge, swap the red/blue version
		table.addEventListener('click', function(e){
			
			//Ti.API.info('Source: ' + JSON.stringify(e.source));
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
}; 

module.exports = ApplicationWindow;
