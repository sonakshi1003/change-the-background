
var r = 0;
var g = 50;
var b=255;
var rect;

function setup(){
  createCanvas(1200,800);


}


function draw(){
background = 0;

rect = createSprite(400,200,100,50);
rect.x = World.mouseX;
rect.y = World.mouseY;

drawSprites();
}