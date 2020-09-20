var bBalloon, yBalloon, rBalloon;
var bBalloonImg, yBalloonImg, rBalloonImg;
var bow, bowImg, arrowImg, arrow;

function preload(){

  bBalloonImg = loadImage("images/BlueBalloon.png");
  yBalloonImg = loadImage("images/YellowBalloon.png");
  rBalloonImg = loadImage("images/RedBalloon.png");

  bowImg = loadImage("images/Bow.png");
  arrowImg = loadImage("images/Arrow.png");
}
function setup() {
  createCanvas(800,400);

  bow = createSprite(770,100,50,50);
  bow.addImage(bowImg);
  bow.scale = 0.4;

  bBalloonGroup = new Group();
  yBalloonGroup = new Group();
  rBalloonGroup = new Group();
  arrowGroup = new Group();

}

function draw() {
  background(255); 

  Balloon();

  if(keyDown("space")){
    drawArrow();
  }
  bow.y = mouseY;

  drawSprites();
}

function Balloon(){
  if(frameCount % 100 === 0){
    bBalloon = createSprite(random(0,700),400,50,50);
    bBalloon.velocityY = random(-1,-4);
    bBalloon.shapeColor = "blue";
    bBalloon.addImage(bBalloonImg);
    bBalloon.scale = 0.1;

    bBalloon.lifetime = 700;
    bBalloonGroup.add(bBalloon);
  }

  if(frameCount % 150 === 0){
    yBalloon = createSprite(random(0,700),400,50,50);
    yBalloon.velocityY = random(-1,-4);
    yBalloon.shapeColor = "yellow";
    yBalloon.addImage(yBalloonImg);
    yBalloon.scale = 0.1;

    yBalloon.lifetime = 700;
    yBalloonGroup.add(yBalloon);
  }

  if(frameCount % 200 === 0){
    rBalloon = createSprite(random(0,700),400,50,50);
    rBalloon.velocityY = random(-1,-4);
    rBalloon.shapeColor = "red";
    rBalloon.addImage(rBalloonImg);
    rBalloon.scale = 0.1;

    rBalloon.lifetime = 700;
    rBalloonGroup.add(rBalloon);
  }
}

function drawArrow(){
  arrow = createSprite(750,10,50,50);
  arrow.addImage(arrowImg);
  arrow.y = bow.y;
  arrow.scale = 0.1;
  arrow.velocityX = -7

  arrow.lifetime = 188;
  arrowGroup.add(arrow);
}
