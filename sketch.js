var box;
var box2;
var box3;
var box4;



function setup()
{

  createCanvas(windowWidth,windowHeight);


  box = createSprite(200,200,30,30);
  box2 = createSprite(300,300,30,30);
  box3 = createSprite(450,300,30,30);
  box4 = createSprite(500,300,30,30);
  


}


function draw() 
{
  background(0, 150, 255)
  background(30);




  box.collide(box2)

  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x +5;
  }

  if (keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x -5;
  }

  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y -5;
  }

  if (keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y +5;
  }

box3.visible = false
box4.visible = false

  if(box.collide(box2))
  {
    textSize(50);
    text("voce",100,100);
    box3.visible = true

  }


  if(box.collide(box3))
  {
    background("red");
    fill("white")
    textSize(80);
    text("não",200,100);
    box4.visible = true
  }


  if(box.collide(box4))
  {
    textSize(50);
    text("é especial",300,100);
    
   
  }



  drawSprites();


}




