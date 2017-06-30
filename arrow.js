		$(document).ready(function() {
						var canvas = $("myCanvas_1");
						var context = canvas.get(0).getContext("2d");
						var canvasWidth = canvas.width();
						var canvasHeight = canvas.height();
            
						arrow = new Arrow1(); 

						arrow.x = canvasWidth/2		
						arrow.y = canvasHeight/2;

						window.onmousemove = (function(event) { 

							context.clearRect(0, 0, canvasWidth, canvasHeight);
							var dx = event.clientX - arrow.x;	
							var dy = event.clientY - arrow.y; 
							context.save();
							context.translate(arrow.x, arrow.y);
							context.rotate(Math.atan2(dy, dx));
							arrow.draw(context); 
							context.restore();
						
						});	
							
					});	