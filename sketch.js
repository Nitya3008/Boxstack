const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var blueBox;
var redBox;
var greenBox;
var yellowBox;

var invisibleGround;
var coins=0;
var edges

function preload(){
  backgroundImg=loadImage("background.jpg")
  blueBoxImg=loadImage("blue box.jpg");
  redBoxImg=loadImage("red box.jpg");
 greenBoxImg=loadImage("green box.jpg");
  yellowBoxImg=loadImage("yellow box.jpg");
  coinImg=loadImage("coin.jpg");
}
function setup() {
  createCanvas(1295,665);
  engine = Engine.create();
	world = engine.world;

  invisibleGround=createSprite(650,650,1250,20);
 invisibleGround.visible=false;
 
 blueBox=Bodies.rectangle(random(300,1000),100,100,50);
 World.add(world,blueBox);

 redBox=Bodies.rectangle(random(300,1000),100,100,50);
 World.add(world,redBox);

 yellowBox=Bodies.rectangle(random(300,1000),100,100,50);
 World.add(world,yellowBox);

 greenBox=Bodies.rectangle(random(300,1000),100,100,50);
 World.add(world,greenBox);
   edges= createEdgeSprites();

   rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}

function draw() {
  background(backgroundImg);


 
 var rand=Math.round(random(1,4));
 if(frameCount%50===0){
if(rand==1){
  drawBlueBox();
} 
else if(rand==2){
  drawRedBox();
}
else if(rand==3){
  drawYellowBox();
}
else{
  drawGreenBox();
}
}
 //blueBox.collide(invisibleGround);
 //redBox.collide(invisibleGround);
 //greenBox.collide(invisibleGround);
 //yellowBox.collide(invisibleGround);
// yellowBoxGroup.collide(redBoxGroup);
 //yellowBox.collide(blueBox);
 //yellowBox.collide(greenBox);
// greenBoxGroup.collide(blueBoxGroup);
 //greenBox.collide(redBox);
 //blueBox.collide(redBox);
 //blueBox.collide(edges[1]);
 //redBox.collide(edges[1]);
 //greenBox.collide(edges[1]);
 //yellowBox.collide(edges[1]);
 if(keyDown(RIGHT_ARROW)){
   blueBox[0].velocityX=1;
   console.log("pressed right")
 } 
 if(keyDown(LEFT_ARROW)){
   blueBox[0].velocityX=-1;
   console.log("pressed left")
 }
 if(keyDown(RIGHT_ARROW)){
  redBox[0].velocityX=1;
  console.log("pressed right")
} 
if(keyDown(LEFT_ARROW)){
 redBox[0].velocityX=-1;
  console.log("pressed left")
}
if(keyDown(RIGHT_ARROW)){
 greenBox[0].velocityX=1;
  console.log("pressed right")
} 
if(keyDown(LEFT_ARROW)){
  greenBox[0].velocityX=-1;
  console.log("pressed left")
}
if(keyDown(RIGHT_ARROW)){
  yellowBox[0].velocityX=1;
  console.log("pressed right")
} 
if(keyDown(LEFT_ARROW)){
  yellowBox[0].velocityX=-1;
  console.log("pressed left")
}
 if(collide(greenBox,blueBox)=true){
 World.remove(engine.world,greenBox);
 World.remove(engine.world,blueBox);
  
 }
 if(collide(redBox,yellowBox)=true){
  World.remove(engine.world,redBox);
 World.remove(engine.world,yellowBox);
}
  drawSprites();
  
}
function collide(bodyA,bodyB){
  if(bodyA!=null){
    var d=dist(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y);
    if(d<=20){
      World.remove(engine.world,body);
      body=null;
      return true;
    }
    else{
      return false;
    }
  }
  }


