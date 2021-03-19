var canvas;
var music;
var box1,box2,box3,box4
var movingBox
var edgeSprites


function setup(){
    canvas = createCanvas(800,600);
  box1=createSprite(700,580,150,20) 
  box2=createSprite(500,580,150,20)
  box3=createSprite(300,580,150,20)
  box4=createSprite(100,580,150,20)
  movingBox=createSprite(300,400,25,25)
  edgeSprites=createEdgeSprites()
}

function draw() {
 background(rgb(169,169,169));

movingBox.velocityX=1
movingBox.velocityY=4

bounceOff(movingBox,edgeSprites)

box1.shapeColour("red")
box2.shapeColour("yellow")
box3.shapeColour("green")
box4.shapeColour("blue")
movingBox.shapeColour("white")

if (movingBoxisTouching(box1)){
  movingBox.shapeColour("red")
}

if (movingBoxisTouching(box2)){
  movingBox.shapeColour("yellow")
}

if (movingBoxisTouching(box3)){
  movingBox.shapeColour("green")
}

if (movingBoxisTouching(box4)){
  movingBox.shapeColour("blue")
}




drawSprites()
}