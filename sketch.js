var fondo;
var ab,abimg;
var obs,obsimg;
function preload(){
   fondo = loadImage("sky flappy bird.jpg");
   abimg = loadImage("Flappy-Bird-Logo-PNG-Pic.png");
   obsimg = loadImage("tubo.png")
}

function setup() {
  createCanvas(1900,900);
ab = createSprite(100,750);
ab.addImage(abimg);
ab.scale = 0.15;


}
function draw() {

  background(fondo);
  tubos();
  drawSprites();
  
}

function tubos(){
  if(frameCount %60 === 0){
    obs = createSprite(1750,450);
    obs.addImage(obsimg);
    obs.scale = 5;
    obs.velocityX = 20;
  }
}