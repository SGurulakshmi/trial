var ground,  groundImage;
var score=0;

var elena,elenaImg;
var mattel,mattelImg;
var gabe,gabeImg;
var naomi,naomiImg;
var isabel,isabelImg;
var ash;
var victor;
var carla;
var sheriky;
var animals;
var thief





function preload()
{       
        //background
        groundImage=loadImage("eci/bgim.jpg");

        //
        elenaImg =loadImage("eci/elena.png");
        mattelImg = loadImage("eci/mattel.png");
        gabeImg = loadImage("eci/gabe.png");
        naomiImg = loadImage("eci/Naomi.png");
        isabelImg = loadImage("eci/isabel.png");

        carla =loadImage("eci/carla.png");
        victor =loadImage("eci/victor.png");
        ash = loadImage("eci/ash.png");
        sheriky = loadImage("eci/sheriky.png");
        animals =loadImage("eci/hyna.png");
        thief = loadImage("eci/theif.png");
}

function setup()
{
   // canvas    
  createCanvas(800,800);

  //background
  ground = createSprite(400,400,800,2000);
  ground.velocityY = -6
  ground.addImage("ground",groundImage);
  ground.scale= 3.5;

  //elena
  elena = createSprite(400,690,80,80);
  elena.shapeColor = "red";
  elena.addImage("elenar",elenaImg);
  elena.scale= 0.5;

  //mattel
  mattel = createSprite(460,705,80,80);
  mattel.shapeColor = "red";
  mattel.addImage("mattel",mattelImg);
  mattel.scale = 0.2;

  //gabe
  gabe = createSprite(250,670,80,80);
  gabe.shapeColor = "red";
  gabe.addImage("gabe",gabeImg);
  gabe.scale =  0.45;

  //naomi
  naomi = createSprite(330,695,80,80);
  naomi.shapeColor = "red";
  naomi.addImage("naomi",naomiImg);
  naomi.scale = 0.3;

  //isabel
  isabel = createSprite(540,700,80,80);
  isabel.shapeColor = "red";
  isabel.addImage("isabel",isabelImg);
  isabel.scale = 0.3;

};

function draw() 
{
    //background colour
    background("pink");
  
    //repeted ground
      if (ground.y < 0)
      {
            ground.y = 500 ;
      };

   //call of spawn obstacles
   spawnObstacles();
   drawSprites();

        //trex.debug = true;
        // trex.collide(invisibleGround);
        // spawnClouds();
}


function spawnObstacles() 
{
      
  if(frameCount % 200 === 0) 
  {
        var enemy = createSprite(400,150,10,40);
         enemy.velocityY = 2;
         var rand = Math.round(random(1,6));

    switch(rand) 
    {
      case 1: enemy.addImage("carlaimg",carla);
              enemy.scale = 0.5
              break;
      case 2: enemy.addImage("victorimg",victor);
              enemy.scale = 0.4
              break;
      case 3: enemy.addImage("ashimg",ash);
              enemy.scale = 0.4
              break;
      case 4: enemy.addImage("sherikyimg",sheriky);
              enemy.scale = 0.06;
              break;
      case 5: enemy.addImage("thiefimg",thief);
              enemy.scale = 0.2;
              break;
      case 6: enemy.addImage("hynaImg",animals);
              enemy.scale = 0.5
              break;
      default: break;
    }; 
  };
};


// function spawnClouds() {
//   //write code here to spawn the clouds
//   if (frameCount % 60 === 0) {
//     var cloud = createSprite(600,120,40,10);
//     cloud.y = Math.round(random(80,120));
//     cloud.addImage(cloudImage);
//     cloud.scale = 0.5;
//     cloud.velocityX = -3;
    
//      //assign lifetime to the variable
//     cloud.lifetime = 200;
    
//     //adjust the depth
//     cloud.depth = trex.depth;
//     trex.depth = trex.depth + 1;
    
//     //add each cloud to the group
//     cloudsGroup.add(cloud);
//   }
  
// }





//     //assign scale and lifetime to the obstacle           
//     obstacle.scale = 0.5;
//     obstacle.lifetime = 300;
//     //add each obstacle to the group
//     obstaclesGroup.add(obstacle);
//   }
// }

// function reset(){
//   gameState = PLAY;
//   gameOver.visible = false;
//   restart.visible = false;
  
//   obstaclesGroup.destroyEach();
//   cloudsGroup.destroyEach();
  
//   trex.changeAnimation("running",trex_running);
  
//   if(localStorage["HighestScore"]<score){
//     localStorage["HighestScore"] = score;
//   }
//   console.log(localStorage["HighestScore"]);
  
//   score = 0;

