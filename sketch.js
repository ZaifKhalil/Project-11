var ship;

var seaImg;


function preload(){
  ship = loadAnimation("ship-1.png", "ship-2.png");
  

  
}
function setup(){
  createCanvas(400,400);
  
  ship = createSprite(200,100,100,50); 
  ship.addAnimation("ship-1.png");
  ship.x = 200
  edges = createEdgeSprites();

  sea = createSprite(200,180,400,20)
  sea.addImage("sea.png") 
 
  

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2
    
    
  }

  sea.veloxityX = -4

   drawSprites();
 }
}