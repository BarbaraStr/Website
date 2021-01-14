let mic;


function setup() {  
 //COPY
 getAudioContext().suspend();
 var canvas = createCanvas(windowWidth, windowHeight); 
 canvas.parent("paint");
 // COPY END
mic = new p5.AudioIn();
 mic.start();
 //colorMode(HSB, 1);
   angleMode(DEGREES);
 noFill();
   //noLoop();
   kMax = random(0.1, 3.0);
   step = 0.02;
   stroke(0,0,255);
	
} 

function draw() { 
	background(0);
		angleMode(DEGREES);  

	
	let vol = mic.getLevel();
	vol=vol*5;
	
	stroke(100*vol*2,100*vol*2,255); 
	noFill(); 
	
	// letzte Abstand
	for (var count = 10; count <= width; count = count + 20) { 
			for (var down = 10; down <= height; down = down + 20) { 

		ellipse(count, down, 10*vol); 
			} 
	} 
}

