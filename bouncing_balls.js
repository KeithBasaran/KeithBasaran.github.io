
	$(document).ready(function() {

		var canvas = document.getElementById("myCanvas_1");
		var context = canvas.getContext("2d");
        
		var canvasWidth = canvas.width;
		var canvasHeight = canvas.height;
        
		ball1 = new Ball(15),
		ball2 = new Ball(15),
            
		angle1 = 25,
		angle2 = 47,
            
		speed = 3,
		ball1.x = 200,
		ball1.y = 240,
            
		ball2.x = 100,
		ball2.y = 240,
            
		vx1 = speed*Math.cos(angle1*Math.PI/180);
		vy1 = speed*Math.sin(angle1*Math.PI/180);
        
		vx2 = speed*Math.cos(angle2*Math.PI/180);
		vy2 = speed*Math.sin(angle2*Math.PI/180);
		
	(function animate () {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
        window.requestAnimationFrame(animate, canvas);
        
        if(ball1.x > canvasWidth - ball1.radius || ball1.x  < 0 + ball1.radius) {
			vx1 = -vx1;
		}
		if(ball1.y > canvasHeight - ball1.radius || ball1.y < 0 + ball1.radius) {
			vy1 = -vy1;
		}
		 if(ball2.x > canvasWidth - ball2.radius || ball2.x  < 0 + ball2.radius) {
			vx2 = -vx2;
		}
		if(ball2.y  > canvasHeight - ball2.radius || ball2.y  < 0 + ball2.radius) {
			vy2 = -vy2;
		}
		
        ball1.x +=vx1; 
		ball1.y +=vy1;	
		ball2.x +=vx2;
		ball2.y +=vy2;
		
		ball1.draw(context);
		ball2.draw(context);
		
      }());
    });