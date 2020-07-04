var car, wall, speed , weight;
var deformation;
var thickness;
function setup() {
  createCanvas(1600,400);
  car=createSprite(150, 200, 50, 50);
  car.shapeColor="white";
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed= random(223,321);
  weight= random(30,52);
  thickness= random(22,83);
  
}

function draw() {
  background(0); 
  if(keyDown("space"))
  {
  car.velocityX=speed;
  }
  
  if(wall.x - car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    deformation= 0.5* weight* speed* speed/(thickness*thickness*thickness);
    console.log(deformation);
    if(deformation<10)
    {
      wall.shapeColor="green";
    }
    if(deformation>=10)
    {
      wall.shapeColor="red";
    }
  }
  drawSprites();
}
