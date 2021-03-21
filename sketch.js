var wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1500,657);
  
  thickness=random(22,83)
  speed=random(123,200)
  weight=random(30,52)

  bullet=createSprite(10,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width ; 
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ; 
  }
return false ; 
}

function draw() {
  background(0);  

  bullet.velocityX = speed ;  
if(hasCollided(bullet,wall)) {


 
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

if(damage>10) {
  wall.shapeColor = color(255,0,0);
}
if(damage<10) { 
  wall.shapeColor = color(0,255,0);
}

}


     
  drawSprites();
}
