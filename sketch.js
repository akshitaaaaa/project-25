
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, paperImg;
var ground;
var bar1, dustbinImg;
function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
	paperImg=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	ground = createSprite(400,650,800,20)
	ground.shapeColor = "yellow";

	ball = createSprite(80,615,20,20)
	ball.addImage(paperImg);
	ball.scale = 0.3;
	
	bar1 = createSprite(450,540,30,150)
	bar1.shapeColor = "white";
	bar1.addImage(dustbinImg);
	bar1.scale = 0.6;
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 keyPressed();
  ball.collide(ground);
  drawSprites();
  
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
	 ball.x = 390
	 ball.y = 420

	}
}


