  var path , pathImage , runner , runner__run  ; 
  var invisibleBoundary , invisibleBoundary2 ;
  var bomb , coin , energyDrink ;
  var bombImg , coinImg , energyDrinkImg, edges;


 function preload(){
  //pre-load images
   pathImage = loadImage("path.png");
  runner__run = loadAnimation("Jake1.png" , "jake4.png")

  bombImg = loadImage("bomb.png");

  coinImg = loadImage("coin.png");
  
  energyDrinkImg = loadImage("energyDrink.png");
  }

 function setup()
  {
   createCanvas(400,400);

   //creating the path
   path = createSprite(200,200,50,50);
   path.addImage(pathImage);
   path.scale = 1.2;
    
   //creating the runner
   runner = createSprite(200,360,20,20);
   runner.addAnimation( "run",runner__run );
   runner.scale = 0.9

   edges = createEdgeSprites();
  
   
    
   //creating invisible boundaries
   invisibleBoundary = createSprite(10,200,20,400);
   invisibleBoundary.visible = false;

   invisibleBoundary2 = createSprite(390,200,20,400)
   invisibleBoundary2.visible = false;

  //creating bomb
  bomb = createSprite(100,70,10,10);
  bomb.addImage(bombImg);
  bomb.scale = 0.1;

  //creating coins
 coin = createSprite(200,250,20,20);
 coin.addImage(coinImg);
 coin.scale = 0.4;

 //creating energyDrinks
 energyDrink = createSprite(300,100,20,20);
 energyDrink.addImage(energyDrinkImg);
 energyDrink.scale = 0.1;

  }

  function draw() {
   background("green");

   if(path.y > 400 ){
    path.y = height/2;
     }
   path.velocityY = 15;

   runner.x = World.mouseX;
   //runner.y = World.mouseY;

   runner.collide(invisibleBoundary);
   runner.collide(invisibleBoundary2);

  drawSprites();
  }