// P_2_2_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * form mophing process by connected random agents
 *
 * MOUSE
 * click               : start a new circe
 * position x/y        : direction of floating
 *
 * KEYS
 * 1-2                 : fill styles
 * f                   : freeze. loop on/off
 * Delete/Backspace    : clear display
 * s                   : save png
 */
'use strict';

var formResolution = 15;
var stepSize = 4;
var distortionFactor = 0.1;
var initRadius = 200;
var centerX;
var centerY;
var x = [];
var y = [];

var filled = false;
var freeze = false;
let mic;


function setup() {
//COPY
getAudioContext().suspend();
var canvas = createCanvas(windowWidth, windowHeight); 
canvas.parent("paint");
// COPY END
	mic = new p5.AudioIn();
  mic.start();



  // init shape
  centerX = width / 2;
  centerY = height / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(255, 50);
  strokeWeight(0.75);
  background(0);
}

function draw() {
//	background(0,1);

	let vol = mic.getLevel();
	vol=vol*5;
	
  // floating towards mouse position
  //centerX += (mouseX - centerX) * 0.0001;
  //centerY += (mouseY - centerY) * 0.0001;
	
	 // centerX += height / 2;
  //centerY += width /2 ;

  // calculate new points
  for (var i = 2; i < formResolution*vol*15; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    // uncomment the following line to show position of the agents
 //  ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
  }

  if (filled) {
    fill(random(255));
  } else {
    noFill();
  }

  beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();
}

//function mousePressed() {
  // init shape on mouse position
//  centerX = mouseX;
  //centerY = mouseY;
  //var angle = radians(360 / formResolution);
  //var radius = initRadius * random(0.5, 1);
  //for (var i = 0; i < formResolution; i++) {
    //x[i] = cos(angle * i) * initRadius;
    //y[i] = sin(angle * i) * initRadius;
 //// }
////}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0);
  if (key == '1') filled = false;
  if (key == '2') filled = true;

  // pauze/play draw loop
  if (key == 'f' || key == 'F') freeze = !freeze;
  if (freeze) {
    noLoop();
  } else {
    loop();
  }
}
