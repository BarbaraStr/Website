let kMax;
let mic;
let step;

function setup() {  
	 //COPY
     getAudioContext().suspend();
     var canvas = createCanvas(windowWidth, windowHeight); 
     canvas.parent("paint");
     // COPY END 
	 mic = new p5.AudioIn();
  mic.start();
  }  

function draw() {  
	  background(255);
	let vol = mic.getLevel();
	vol = vol*5;

	noStroke();  
	// x ranges from 0 to 800  
	for (var x = 0; x < windowWidth; x += 10) {  
		// y ranges from 0 to 600  
		for (var y = 0; y < windowHeight; y += 10) { 
			// for every location calculate a colour  
			var red = 100*1 - ((sin(x*vol/50) + 1) * 100);;  
			var green = 100*1 - ((sin(x*vol/50) + 1) * 100);  
			var blue = 100*3 - ((cos(y*vol/50) + 1) * 100); 

fill( red, green, blue); 

rect(x, y, 40, 10);  
		} 
	} 
} 
