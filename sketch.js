const Engine = Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world, ground,ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world;

  var options = {
  restitution:1.5
  }

  ball = Bodies.circle(200,200,30,options)
  World.add(world, ball)


  
  var g_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,30,g_options)
  World.add(world, ground)


}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER) 
  fill('grey')
  rect(ground.position.x, ground.position.y,400,30)


  ellipseMode(RADIUS)
fill('white')
ellipse(ball.position.x,ball.position.y,30,30)
}