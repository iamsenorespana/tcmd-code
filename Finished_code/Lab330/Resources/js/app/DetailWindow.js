var ui = require_once('js/app/common/ui');
var db = require_once('js/app/common/db');

exports.DetailWindow = function(fugitive) {
	var win = ui.window(fugitive.name,{
		orientationModes: [
			Ti.UI.PORTRAIT
		]
	});
	ui.addBackButtonView(win);
	
	var topSection = Ti.UI.createView({
		backgroundImage:'images/detail_bg.png',
		height:122,
		top:0
	});
	win.addChild(topSection);
	
	var fugitiveImage = Ti.UI.createImageView({
		image:'images/placeholder.png',
		top:10,
		height:90,
		width:90,
		borderRadius:5,
		left:10
	});
	topSection.add(fugitiveImage);
	
	var vitalsView = Ti.UI.createView({
		top:10,
		left:110,
		right:10,
		layout:'vertical'
	});
	
	vitalsView.add(ui.label(fugitive.name,{left:0,font:{fontWeight:'bold'}}));
	
	var statusText = 'STILL AT LARGE', 
		statusColor = '#ff0000';
	if (fugitive.captured) {
		statusText = 'Busted!';
		statusColor = '#000';
	}
	vitalsView.add(ui.label(statusText,{left:0,color:statusColor,top:5,font:{fontWeight:'bold'}}));
	
	var heightText = 'Unknown';
	if (fugitive.heightFeet) {
		heightText = fugitive.heightFeet+'\' '+fugitive.heightInches+'"';
	}
	vitalsView.add(ui.label('Height: '+heightText,{left:0,top:5}));
	
	topSection.add(vitalsView);

	var detailsView = Ti.UI.createView({
		layout:'vertical'
	});
	detailsView.add(ui.label('Description:',{top:5,left:5,right:5,color:'#fff',font:{fontWeight:'bold'}}));
	detailsView.add(ui.label(fugitive.description||'No further intel available.',{top:5,left:5,right:5,color:'#fff'}));
	
	var actionView = Ti.UI.createView({
		layout:'vertical'
	});
	
	var addImageButton = Ti.UI.createButton({
		backgroundImage:'images/button_off.png',
		backgroundSelectedImage:'images/button_on.png',
		title:'Add Image',
		font:{fontSize:22,fontWeight:'bold'},
		color:'#787878',
		top:10,
		left:15,
		right:15,
		height:50
	});
	actionView.add(addImageButton);
	
	var captureButton = Ti.UI.createButton({
		backgroundImage:'images/button_off.png',
		backgroundSelectedImage:'images/button_on.png',
		title:'Capture',
		font:{fontSize:22,fontWeight:'bold'},
		color:'#787878',
		top:10,
		left:15,
		right:15,
		height:50
	});
	actionView.add(captureButton);
	
	var deleteButton = Ti.UI.createButton({
		backgroundImage:'images/button_off.png',
		backgroundSelectedImage:'images/button_on.png',
		title:'Delete',
		font:{fontSize:22,fontWeight:'bold'},
		color:'#787878',
		top:10,
		left:15,
		right:15,
		height:50
	});
	deleteButton.addEventListener('click', function() {
		db.remove(fugitive);
		win.close();
	})
	actionView.add(deleteButton);
	
	var mapView = Ti.UI.createView({
		backgroundColor:'#123'
	});
	
	//add a map view to the scrollable view if needed
	if (fugitive.capturedLat) {
		var map = Titanium.Map.createView({
			mapType: Titanium.Map.STANDARD_TYPE,
			region: {latitude:42.334537,longitude:-71.170101,latitudeDelta:0.010, longitudeDelta:0.018},
			animate:true,
			regionFit:true,
			userLocation:true,
			touchEnabled:false
		});
		mapView.add(map);
	}
	else {
		mapView.add(ui.label('No Location Information Available.',{textAlign:'center',color:'#fff'}));
	}
	
	var scrollView = Ti.UI.createScrollableView({
		views:[detailsView,actionView,mapView],
		showPagingControl:true,
		top:122,
		bottom:0,
		pagingControlColor:'#232323',
		pagingControlHeight:30
	});
	win.addChild(scrollView);
	
	

	return win;
};