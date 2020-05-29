var tringle1;
var bullet1;
var circle1;
var circle2;
var bulletGroup;
var circleGroup;
function setup() {
  createCanvas(800,400);
  bulletGroup = new Group();
  circleGroup = new Group();
  tringle1 = createSprite(50,200);
  tringle1.addImage("tringle1",tringle1_Image);
  tringle1.scale = 0.15;
//circle1 = createSprite(400,30);
//circle1.addImage("circle1",circle11_Image);
//circle1.scale = 0.1;
}
function preload(){
  tringle1_Image = loadImage("tringle1.png");
  circle1_Image = loadImage("circle2.jpg");
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
if (World.frameCount % 27 === 0) {
  var circle1 = createSprite(random(180,780),420,40,10);
  circle1.addImage("circle2.jpg",circle1_Image)
  circle1.scale = 0.1;
  circle1.velocityY = -3;
  //circle.display();
  circleGroup.add(circle1);
}
if (World.frameCount % 27 === 0) {
  var circle2 = createSprite(random(180,780),-20,40,10);
  circle2.addImage("circle2.jpg",circle1_Image)
  circle2.scale = 0.1;
  circle2.velocityY = 3;
 // circle.display();
 circleGroup.add(circle2);
}
for(var i = 0 ;i<circleGroup.length;i++){
  if(bulletGroup.isTouching(circleGroup)){
   // bulletGroup.destroyEach();
    circleGroup.get(i).destroy();
  }
}
  drawSprites();
  //tringle1.display();
}
function keyPressed(){
  if(keyCode === 32){
    bullet1 = createSprite(53,200,27,2);
    bullet1.shapeColor = "red";
    bullet1.velocityX = 20;
    //bullet1.display();
    bulletGroup.add(bullet1);
}
}