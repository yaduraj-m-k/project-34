const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint

var backgroundimg;
var hero,rope,ground;

function preload() {
//preload the images here

backgroundimg=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1500, 500);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  hero= new Hero(200,200,150,100);
  
 ground= new Ground(200,150,90,1)
 rope=new Fly(hero.body,ground.body);

}

function draw() {
  background(backgroundimg);

  hero.display();
  rope.display();
  ground.display();

 // drawSprites();

}


function mouseDragged() {
  
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased() {
    //gameState = "launched";
    rope.fly();
}


