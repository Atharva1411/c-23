const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
var box2;
var ground1; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,350,50,50);
  box2 = new Box(215, 100, 50, 50); 
ground1 = new ground(200, 390.99, 400, 10); 
}

function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground1.display();
}