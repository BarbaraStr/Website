let kMax;
let mic;
let step;
let n = 130; // number of blobs
let radius = 2500; // diameter of the circle
let inter = 300; // difference between the sizes of two blobs
let maxNoise = 280;

let noiseProg = (x) => (x);

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
	blendMode(BLEND);
  background(0);

	let vol = mic.getLevel();
	vol=vol*0.1;
  let t = frameCount/80;
  for (let i = n; i > 0; i--) {
		let alpha = pow(1 - noiseProg(i / n), 3);
		let size = radius + i * inter;
		let k = kMax * sqrt(i/n);
		let noisiness = maxNoise * noiseProg(i / n); 
		

			blendMode(BLEND);
	
		
	//fill(10, 30, 200, alpha*20);
 // blob(size*vol+800, width/2, height/2, k, t - i * step + 0.1, noisiness);
		
	//	fill(10, 10, 230, alpha*20);
    //blob(size*vol+600, width, height/2, k, t - i * step + 1, noisiness*5);
		
		fill(0, 0, 0, alpha*20);
    blob(size*vol+10, width/2, height/2, k, t - i * step + 0.2, noisiness*8);
				
		
			//	blendMode(DARKEST);
				//fill(0, 0, 0, alpha*255);
    //blob(size-(size*0.6), width/2, height/2, k, t - i * step, 0.0);
  }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = 360 / 8;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;
		/*
    if (theta < PI / 2) {
      r1 = cos(theta);
      r2 = 1;
    } else if (theta < PI) {
      r1 = 0;
      r2 = sin(theta);
    } else if (theta < 3 * PI / 2) {
      r1 = sin(theta);
      r2 = 0;
    } else {
      r1 = 1;
      r2 = cos(theta);
    }
		*/
		r1 = cos(theta)+1;
		r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}