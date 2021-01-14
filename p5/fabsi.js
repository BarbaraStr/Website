let mic;


function setup() {  
	  //COPY
	  getAudioContext().suspend();
	  var canvas = createCanvas(1000, 1000); 
	  canvas.parent("paint");
	  // COPY END
	background(0);
		 mic = new p5.AudioIn();
  mic.start();

}  
	
function draw() { 
	blendMode(BLEND)
			fill(0);
	noStroke(0);
	rect(0,0, 999, 999);

	let vol = mic.getLevel();
	vol=vol*20;

	
		// point Q is at (x1 + x2, y1 + y2) 
	// circle radius  
	var radius = 200;  
	// loop to count angle  - ENDE = Anzahl
	for (var angle = 0; angle < 360; angle += 0.5) {  
		// calculate (x,y) for point P  
		var x1 = radius * cos(angle);  
		var y1 = radius * sin(angle);  
		// calculate how far point Q is from P  
		var x2 = radius/ 3 * cos(9 * angle);  
		var y2 = radius/ 3 * sin(9 * angle);  
		
 

	// set angles to be in degrees (not radians)  
	angleMode(DEGREES);  

		blendMode(SCREEN)
   fill(0,0,0,0)
		stroke(20,20*vol*1,250,80);
		strokeWeight(1);
		var x = x1 + x2;  var y = y1 + y2; 
		ellipse(height/2 + x, width/2 - y, 100);  }  } 


