
function ApplicationWindow(){
		
		var isAndroid = ( Ti.Platform.osname === 'android' )? true : false;
		
		// we've laid out most of the UI for you; here's the window
		var win = Ti.UI.createWindow({
			backgroundColor:'#fff'
		});
		// and a heading
		win.add(Ti.UI.createLabel({
			text:'Click the boxes for fun!',
			color:'#000',
			font:{
				fontSize:20,
				fontWeight:'bold'
			},
			height:'auto',
			width:'auto',
			top:10
		}));
		var box = function(color, whatsItDo) {
			// helper function for making colored boxes
			var bx = Ti.UI.createView({
				height:50,
				width:100,
				backgroundColor:color
			});
			// box contains a centered label
			bx.add(Ti.UI.createLabel({
				height:'auto',
				width:'auto',
				text: whatsItDo,
				color:'#fff',
				font:{
					fontWeight:'bold'
				}
			}));
			return bx;
		};
		
		// now we'll add four colored boxes and set a helper variable you'll need later
		var box1 = box('red', 'fade out/in'),
			box2 = box('green', 'fly out/in'),
			box3 = box('yellow', 'transition'),
			box4 = box('blue', 'transition'),
			selectedIndex = 0;
		box1.top = 50;
		box2.top = 120;
		box3.children[0].color="#000";
		win.add(box1);
		win.add(box2);
		
		// this container holds the two boxes you'll transition between
		var container = Ti.UI.createView({
			width:'auto',
			height: 70,
			top: 180
		});
		container.add(box3);
		container.add(box4);
		win.add(container);
		
		// **************************************************
		// Here's where you come in:
		//
		// add an event listener to box1 so that when clicked, it fades out of view in 2 seconds, then fades back into view
		box1.addEventListener('click', function(){
			box1.animate({
				opacity:0,
				duration:2000
			}, function(){
				box1.animate({
					opacity:1,
					duration:2000
				});
			});
		});

		// add an event listener to box2 so that when clicked, it slides off the bottom edge of the screen in 2 seconds, then returns
		box2.addEventListener('click', function(){
			box2.animate({
				top:800,
				duration:2000
			}, function(){
				box2.animate({
					top:120,
					duration:2000
				});
			});
		});
		
		// add an event listener to container that tracks odd/even numbered clicks. 
		// with odd-numbered clicks, box4 transitions into view using the flip-from-right style
		// for even-numbered clicks, box3 transitions into view using the flip-from-left style
		// this effect will work on only iOS
		container.addEventListener('click', function(){
			if ( isAndroid ){
				if ( selectedIndex%2 == 0){
						var flipLeft = Ti.UI.create2DMatrix();
						flipLeft = flipLeft.translate()
					// Animate Box 4
					box4.animate({
						transform: Ti.UI.create2DMatrix({
							
						}), 
						duration: 2000
					}, function (){
						
					});
				} else {
					
				}
			} else {
				
				if (selectedIndex%2 == 0) {
					container.animate({
						view:box3,
						transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
					});
				}
				else {
					container.animate({
						view:box4,
						transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
					});
				}				
			}

			selectedIndex++;
		});
		// **************************************************
		// all done, return the window
		return win;	
	
};

module.exports = ApplicationWindow;
