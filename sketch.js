// P5 STUFF

//create color variables to store rgb for each client
var myFillR, myFillG, myFillB;
var myX, myY;
var otherX, otherY;
var hit = false;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background('grey');
	fill('black');
	rect((windowWidth/6),0,(2*(windowWidth/3)),windowHeight );
	//print(2*(windowWidth/3));
	//print(windowWidth/3);

	//generate a random color for each color var
	myFillR = floor(random(0, 255)); 
	myFillG = floor(random(0, 255));
	myFillB = floor(random(0, 255));

	myX = (windowWidth/2) - 15;
	myY = windowHeight - (windowHeight/9) + 10;
	myVeh = new Vehicle();
	console.log(myX);
	//var s = createSprite(myX, myY, 30,60);

}

function draw() {

	//start line
	fill(186);
	rect((windowWidth/6) + 5,windowHeight-windowHeight/9,(2*(windowWidth/3))-10,10);

	fill(myFillG,myFillG,myFillB);
	stroke('black');
	strokeWeight(3);
	myVeh.display();
	myVeh.move();
	//print(myY);
	// myVeh.bounce(Vehicle);
	
	//send our drawing EVERY time draw loops through
	//vale that we pass in is a JSON object
	sendDrawing({
		'x':myX,
		'y':myY,
		'r':myFillR,
		'g':myFillG,
		'b':myFillB
	});


 
}

//SEND MY DRAWING DATA = x,y,r,g,b
//'message is a JSON object that includes x,y,r,g,b'
function sendDrawing(message){
	socket.emit('drawing', message);
	//console.log(message);
}

function drawOther(someX, someY, someR,someG,someB){
	fill(someR,someG,someB);
	rect(someX,someY,30,60);
	this.x = someX;
	this.y = someY;

	this.collide - function(obj){
		this.hit = collideRectRect(this.x,this,y,30,60,obj.x,obj.y,30,60 );

		if(this.hit){
			myX = (windowWidth/2) - 15;
			myY = windowHeight - (windowHeight/9) + 10;
			this.hit = false;
		}
	}

}

function Vehicle(){

	// this.x = x;
	// this.y = y;
	this.width = 30;
	this.height = 60;

	this.move = function(){
		if(keyIsDown(LEFT_ARROW)){
			if(myX > ( (windowWidth/6)+2)){
				myX-=2;
			}
		}
		if(keyIsDown(RIGHT_ARROW)){
			if(myX < ((2*(windowWidth/3))+ (windowWidth/6)-32)){
				myX+=2;
			}
		}
		if(keyIsDown(UP_ARROW)){
			if(myY > 0){
				myY-=2;
			}
		}
		if(keyIsDown(DOWN_ARROW)){
			if(myY < windowHeight - ((windowHeight/5)-6)){
				myY+=2;
			}
		}
	}

	this.display = function(){
		fill(this.r,this.g,this.b);
		rect(myX,myY,this.width,this.height);
	}
}
	

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
	background('grey');
	fill('black');
	rect((windowWidth/6),0,(2*(windowWidth/3)),windowHeight );
}