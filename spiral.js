
	$(document).ready(function() {
		//assign the canvas element  to a variable using the DOM
		var canvas = document.getElementById("myCanvas_1");
		//assign the 2d rendering context (what we draw on) to a variable
		var context = canvas.getContext("2d");
		var canvasWidth = canvas.width;
		var canvasHeight = canvas.height;
		var t = 0;
		var xPos = 0;
		var yPos = 0;
		var centreX = canvasWidth/2;
		var centreY = canvasHeight/2;
		var radius = 0;
		context.beginPath();
		//context.moveTo(canvasWidth/2, canvasHeight/2);
		context.moveTo((radius*Math.cos(t*Math.PI/180)+centreX), (radius*Math.sin(t*Math.PI/180) + centreY));
		
		/*function linterp(param, min, max) {
			return(max - min)*param + min;
		}*/
		//sets up animation loop
		function animate () {
			
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			window.requestAnimationFrame(animate, canvas);
			//amount the radius is increasing by every iteration
			radius = t/36;
			xPos = radius*Math.cos(t*Math.PI/180) + centreX;
			yPos = radius*Math.sin(t*Math.PI/180) + centreY;
			//clockwise
			context.lineTo(xPos, yPos);
			//context.closePath();
			context.stroke();
			//incrementing by 1 is very very slow
			t = t + 10;
			console.log(radius);
			
			
			
		};
		//call it once to kick it off 
		//after that it recursively calls itself
		window.requestAnimationFrame(animate, canvas);
    });