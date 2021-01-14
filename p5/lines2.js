let mic;

function setup() {  
	 //COPY
     getAudioContext().suspend();
     var canvas = createCanvas(windowWidth, windowHeight); 
     canvas.parent("paint");
     // COPY END 
	//noLoop();   
mic = new p5.AudioIn();
  mic.start();
}

function draw() {  
	noStroke();  
	fill(0,0,255);  
	step=10;
	 background(0);
	let vol = mic.getLevel();
	vol=vol*1000;

	
	// set angles to be in degrees (not radians)  
	angleMode(DEGREES);  
	
	// circle radius  
	var radius = 200+vol*0.5;  
	
	// loop to count angle  
	for (var angle = 0; angle <= 360; angle += step) {  
		
		// calculate the x and y coordinates  
		var x1 = radius * cos(angle+(vol/50*step)); 
		var y1 = radius * sin(angle+(vol/50*step));  
		
		var x2 = radius * cos(angle+(vol/5*step));  
		var y2 = radius * sin(angle+(vol/5*step));  
	 
		stroke(0, 0, 250, 60);
		//Form und grösse
		line(width/2 + x1, height/2 - y1, width/2 + x2, height/2 - y2); 
		
		var x3 = radius * cos(angle+(15*step));  
		var y3 = radius * sin(angle+(15*step));  
		
		stroke(255, 255, 255, 60);
		line(width/2 + x1, height/2 - y1, width/2 + x3, height/2 - y3); 
		
	}  
 
}