$(document).ready(function() {
		var canvas = document.getElementById("myCanvas_1");
    
		var context = canvas.getContext("2d");
		var canvasWidth = canvas.width;
		var canvasHeight = canvas.height;
    
		var t = 0;
		var xPos = 0;
		var yPos = 0;
    
		var centreX = 0;
		var centreY = 0;
		var radius = 40;
		context.beginPath();
		context.moveTo(radius*Math.cos(t*Math.PI/180) + centreX,radius*Math.sin(t*Math.PI/180) + centreY);
    
		function animate () {
			
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			window.requestAnimationFrame(animate, canvas);
			centreX = t/36;
			centreY = t/36
			xPos = radius*Math.cos(t*Math.PI/180) + centreX;
			yPos = radius*Math.sin(t*Math.PI/180) + centreY;
			context.lineTo(xPos, yPos);
			context.stroke();
			
			t = t + 10;
			
			
			
		};
    
		window.requestAnimationFrame(animate, canvas);
    });