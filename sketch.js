
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var block3;


function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;
plane_options ={
isStatic: true

}
block1_options ={
	restitution:1,
	friction:0.02,
	frictionAir:0
	}
	block2_options ={
	restitution:1,
	friction:0.01,
	frictionAir:0
	}
	block3_options ={
		restitution:0.5,
		friction:0.01,
		frictionAir:0.01
		}




	//Crie os Corpos Aqui.
plane= Bodies.rectangle (300,480,600,20,plane_options);
World.add(world,plane);
	
block1 = Bodies.circle(220,10,10,block1_options)
World.add(world,block1);

block2 = Bodies.rectangle(250,250,3,3,block2_options)
World.add(world,block2);
block3 = Bodies.rectangle(300,40,3,3,block3_options)
World.add(world,block3);




Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
rect(plane.position.x,plane.position.y,600,20);
fill("red");
ellipse(block1.position.x,block1.position.y,30);
fill("black");
rect(block2.position.x,block2.position.y,30,30);
fill("black");
rect(block3.position.x,block3.position.y,60,30);












  drawSprites();
 
}



