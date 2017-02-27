

// variables for y coordinate of car 1 and 2
var y1;
var y2;
var gameOver = false;
var blueWin = false;
var greenWin = false;
var fontHeaders;
var fontOther;

function preload() {
   //fontHeaders = loadFont("assets/Bahiana-Regular.ttf");
   //fontOther = loadFont("assets/oswald.ttf");

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	y1 = windowHeight - (windowHeight/8);
	y2 = windowHeight - (windowHeight/8);
	

}

function draw() {
	//print(y1);
	background(100);

	//street part
	fill('black');
	rect(windowWidth/2-200,0,400,windowHeight);


	//white dashes
	fill(244, 232, 66);
	// rect(windowWidth/2-10,0,20,40);
	// rect(windowWidth/2-10,50,20,40);
	// rect(windowWidth/2-10,100,20,40);
	for(var i=0; i < windowHeight; i+= 70){
		rect(windowWidth/2-10,i,20,40);
	}

	//finish line
	fill(244, 66, 66);
	rect(windowWidth/2-200,49,400,10);

	//start line
	fill(186);
	rect(windowWidth/2-200,windowHeight-windowHeight/7,400,10);
	//print(windowHeight);

	//text
	// fill(200);
	// textSize(80);
	// textFont(fontHeaders);
	// text("P5.js Racing!", windowWidth/2-500, 70);

	// textSize(80);
	// text("Instructions",windowWidth/2+210,70);

	// textSize(20);
	// textFont(fontOther);
	// text("- To make the blue car move, press '1' ",windowWidth/2+210,110 );
	// text("- To make the green car move, press 'up arrow' ",windowWidth/2+210,140 );
	// text("- Pressing the button to make your car move, stops the other car",windowWidth/2+210,170 );
	// text("- First one to cross the red line wins!",windowWidth/2+210,200 );
	// text("- Press 'Esc' to reset the game",windowWidth/2+210,230 );

	/*
	fill(66, 185, 244);
	textSize(60);
	text("BLUE WINS!",windowWidth/2-450,210 );
	*/

	//blue car
	drawBlue();

	//green car
	drawGreen();

	//Movement

	keyPressed();

	//Win Check
	winCheck();

function Vehicle(){

	this.x = 10;
	this.y = 10;
	this.width = 100;
	this.height = 100;

	this.move = function(){
		if(keyIsDown(LEFT_ARROW)){
			this.x--;
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.x++;
		}
		if(keyIsDown(UP_ARROW)){
			this.y--;
		}
		if(keyIsDown(DOWN_ARROW)){
			this.y++;
		}
	}

	this.display = function(){
		fill(this.r,this.g,this.b);
		rect(this.x,this.y,this.width,this.height);
	}
}
	
}
function drawBlue(){
	fill(66, 185, 244);
	rect(windowWidth/2 - 115,y1,30,55);
}

function drawGreen(){
	fill(63, 244, 90);
	rect(windowWidth/2 + 95,y2,30,60);
}

function keyPressed() {
if(keyCode == 49){// 1 Key
		if(y1>= 60){
	    	y1--;//blue
		}
	}
	 if (keyCode == UP_ARROW){// Up Arrow
  		if(y2>= 60){
	    	y2--;//green
		}
	}
	
	if(keyCode == 27){// Escape Key
		y1=windowHeight - (windowHeight/8);
		y2=windowHeight - (windowHeight/8);
		blueWin = false;
		greenWin = false
		gameOver = false;

	}
}

function winCheck(){
	if(y1 < 60 && !gameOver){
		blueWin = true;
		gameOver = true;
		
	}
	if(blueWin){
		fill(66, 185, 244);
		textSize(60);
		textFont(fontHeaders);
		text("BLUE WINS!",windowWidth/2-450,210 );
	}
	if(y2 < 60 && !gameOver){
		greenWin = true;
		gameOver = true;
	}
	if(greenWin){
		fill(63, 244, 90);
		textSize(60);
		textFont(fontHeaders);
		text("GREEN WINS!",windowWidth/2-450,210 );
	}
}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}