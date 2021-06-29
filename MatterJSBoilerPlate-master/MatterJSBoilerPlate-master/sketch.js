
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ball1=new Ball(600,250,50)
ball2=new Ball(500,250,50)
ball3=new Ball(400,250,50)
ball4=new Ball(300,250,50)
ball5=new Ball(200,250,50)
rod=new Rod(190,10,600,20)
rope1=new Rope(ball1.body,rod.body,200,0)
rope2=new Rope(ball2.body,rod.body,150,0)
rope3=new Rope(ball3.body,rod.body,100,0)
rope4=new Rope(ball4.body,rod.body,50,0)
rope5=new Rope(ball5.body,rod.body,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
rod.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.poistion,{x:-50,y:-45})
	}
}


