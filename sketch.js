var database
var form,player,game;
var gameState=0;
var playerCount;
var player1,player2,player3,player4,player5;
var players
var AllPlayers;
var edges;
var selectimp;
var fuelsprite1,fuelsprite2;
var wiresprite1,wiresprite2;
var connect = 0;
var fillpic = 0;
var fillcounter = 0;
var gametime = 0;
var activecount;
function preload(){
	startingimg=loadImage("starting.png")
	playingarea=loadImage("playingarea.jpg")
	frameImg = loadImage("frame.png");
	circuitImg = loadImage("wire.png");
	fuel1Img = loadImage("fuel1.png");
	fuel2Img = loadImage("fuel2.png");
	fuel3Img = loadImage("fuel3.png");
	plzwaitImg = loadImage("wait.jpg");
	impvicImg = loadImage("Impvictory.jpg");
	crewvicImg = loadImage("crewvictory.jpg");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	database=firebase.database();
	bg = createSprite(displayWidth/2,displayHeight/2);
	bg.addImage(playingarea);
	bg.scale = 1.5;

	fuelsprite1=createSprite(-37,-200,10,40);
	fuelsprite1.addImage(frameImg);
	fuelsprite1.scale = 0.1;

	fuelsprite2=createSprite(-30,750,10,40);
	fuelsprite2.addImage(frameImg);
	fuelsprite2.scale = 0.1;

	wiresprite1=createSprite(530,390,10,40);
	wiresprite1.addImage(frameImg);
	wiresprite1.scale = 0.1;

	wiresprite2=createSprite(1250,780,10,40);
	wiresprite2.addImage(frameImg);
	wiresprite2.scale = 0.1;

	game = new Game();
	game.getState();
	game.start();
	
 
  
}


function draw() {
	
if(playerCount===5 && gameState!==2 &&  gameState!==3 && gameState!==4){
	gameState=1;
		game.update(gameState);
	
		
}
if(gameState === 1){
	game.play();

}
if(mousePressedOver(wiresprite1) || mousePressedOver(wiresprite2)){
	gameState = 2;
		
  }
  if(gameState === 2){
	wirefunction();

}
if(mousePressedOver(fuelsprite1) || mousePressedOver(fuelsprite2)){
	gameState = 3;
		
  }
  if(gameState === 3){
	fuelfunction();

}
if(gameState === 4){
	console.log(gameState)
	game.end();

}
}



