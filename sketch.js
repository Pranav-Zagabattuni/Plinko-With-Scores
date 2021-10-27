var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var world;
var engine;

var gameState = "play";
var havePassed = true

var score = 0;
var particle;
var count = 0;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  text("Score: " + score, 50, 50)
  text("500",20,520);
  text("500",105,520);
  text("500",180,520);
  text("500",265,520);
  text("100",340,520);
  text("100",420,520);
  text("100",500,520);
  text("200",580,520);
  text("200",660,520);
  text("200",740,520);

  push()
  stroke("yellow")
  strokeWeight(5)
  line(0, 450, 800, 450)
  pop()

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle !== undefined){
    particle.display();
   if(particle.body.position.y > 450 && havePassed == false){
    if(particle.body.position.x < 300){
      score = score + 500;
      havePassed = true
    }
    else if(particle.body.position.x > 301 && particle.body.position.x < 550){
      score = score + 100;
      havePassed = true
    }
    else if(particle.body.position.x > 551){
      score = score + 200;
      havePassed = true
    }
   }
  }

  if(count == 5){
    gameState = "end"
    textSize(50)
    text("Game Over", 200, 200)
  }

/*   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "end"){
    particle=new Particle(mouseX, mouseY, 10);
    havePassed = false
    count++
  }
}

/*  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/