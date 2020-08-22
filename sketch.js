
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	platform = new Platform(400,50,300,20)

	//centre
	bob1 = new Bob(400,350)
	bob2 = new Bob(451,350)
	bob3 = new Bob(502,350)
	bob4 = new Bob(349,350)
	bob5 = new Bob(298,350)

	//centre
	rope1 = new Rope(bob1.body, platform.body,0)
	//right
	rope2 = new Rope(bob2.body, platform.body,50)
	//extreme right
	rope3 = new Rope(bob3.body, platform.body,100)
	//left
	rope4 = new Rope(bob4.body, platform.body,-50)
	//extreme left
	rope5 = new Rope(bob5.body, platform.body,-100)
}


function draw() {
  rectMode(CENTER);
  background(215,215,215);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  platform.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: -150, y: 0});
	}
}