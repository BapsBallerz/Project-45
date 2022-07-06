
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function preload() {
  court = loadImage("images/BasketballCourt.png");
}

function setup() {
  createCanvas(1200,1200);

  engine = Engine.create();
  world = engine.world;
  
   
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(600,1190,width,20,ground_options);
  World.add(world,ground);

 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  image(court, 0,0,width, height);
  Engine.update(engine);
  
  
  rect(ground.position.x,ground.position.y,400,20);
 
}

