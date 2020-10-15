var car , car2 , car3 , wall ;
var speed , speed2 , speed3 ;
var weight , weight2 , weight3 ;
function setup() {
  createCanvas(1600,400);
  car = createSprite(10,150,50,50);
  car2 = createSprite(10,250,50,50);
  car3 = createSprite(10,350,50,50);
  wall=createSprite(1500,200,30,1600);
  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90); 
  weight= random(400,1500); 
  weight2=random(400,1500);
  weight3=random(400,1500);
 car.velocityX = speed;
 car2.velocityX = speed2;
 car3.velocityX = speed3;
}

function draw() {
  background("black");  
  if(wall.x - car.x < (car.width + wall.width) / 2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    car.x = 1460;
    
  }
  if(wall.x - car2.x < (car2.width + wall.width) / 2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight2 * speed2 * speed2 / 22509;
    if(deformation>180){
      car2.shapeColor = "red";
    }
    if(deformation<100){
      car2.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor = "yellow";
    }
    car2.x = 1460;
    
  }
  if(wall.x - car3.x < (car3.width + wall.width) / 2){
    car3.velocityX = 0;
    var deformation = 0.5 * weight3 * speed3 * speed3 / 22509;
    if(deformation>180){
      car3.shapeColor = "red";
    }
    if(deformation<100){
      car3.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor = "yellow";
    }
    car3.x = 1460;
    
  }
    
   
  drawSprites();
    }
  
