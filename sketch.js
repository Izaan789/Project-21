var bullet,wall;

var speed,weight;

function setup() {
  createCanvas(1200,400);
  speed=random(55,90)
  weight=random(400,1500)

  bullet = createSprite(50,200,20,10)
    
  bullet.velocityX = speed
  bullet.shapeColor=("blue")

  wall = createSprite(1000,200,60,height/2)
  wall.shapeColor=("brown")

}

function draw() {
  background(255,255,255);  

  wall.depth=bullet.depth;
  bullet.depth=bullet.depth+1

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    
    var deformation = 0.5 * weight * speed * speed/22500;
    
    if(deformation>180){
      wall.shapeColor=("red")
    }
    if(deformation<180 && deformation>100){
      wall.shapeColor=("yellow")
    }
    if(deformation<100){
      wall.shapeColor=("green")
    }
    
  }
  
  drawSprites();
} 