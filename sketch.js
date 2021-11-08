var peter;
var peterImage;
var ground;
var groundImage;
var smoke,rock,mice,gift,troll,powerBoosters,wall;
var smokeImage,rockImage,miceImage,giftImage,trollImage,powerBoostersImage,wallImage;
var backgroundImage;
var edges;
var wallGroup,groundGroup;

function preload(){

backgroundImage=loadImage("mine.jpg");
peterImage=loadAnimation("peter (1).png","peter (2).png","peter (3).png");
groundImage=loadImage("ground2.png");
wallImage=loadImage("ground.png");
}

function setup() {
  createCanvas(800,500);
  peter=createSprite(400, 200, 20, 50);    
  peter.addAnimation("running",peterImage);
  peter.scale=0.1;
  edges=createEdgeSprites();
  wallGroup=new Group();
  groundGroup=new Group();
}

function draw() {
  background(backgroundImage);

if (keyDown(RIGHT_ARROW)){
  peter.x=peter.x+10;
}
if (keyDown(LEFT_ARROW)){
  peter.x=peter.x-10;
}
if (keyDown("space")){
  peter.velocityY=-10;
}
  spawnWalls();
  spawnGround();
 peter.velocityY=peter.velocityY+0.5;
  peter.collide(wallGroup);
 peter.collide(groundGroup);
  drawSprites();
}
function spawnWalls(){
  if(frameCount%50===0){
    wall=createSprite(900,250,100,20);
    wall.addImage(wallImage);
    wall.scale=0.1;
    wall.velocityX=-5;
    wallGroup.add(wall);
  }
}

function spawnGround(){
  if(frameCount%250===0){
    ground=createSprite(900,450,200,100);
    ground.addImage(groundImage);
    ground.scale=0.3;
    ground.velocityX=-5;
    groundGroup.add(ground);
  }
}