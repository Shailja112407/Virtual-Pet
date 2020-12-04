//created the dog and named as Dixie
  var Dixie;
  var happyDixie;
//created database for my program
  var database;
//created to show the food stock
  var foodS;
  var foodStock;


function preload()
{
//loaded the images
  var Dixie_Img = loadImage("images/dogImg.png"); 
  var happyDixie = loadImage("images/dogImg1.png");

}


function setup(){
  //predicting my database as the database of firebase 
    database = firebase.database();
  //gave 500 * 500 size to the canvas  
    createCanvas(500,500);
  //created sprite
    Dixie = createSprite(250,250,10,10);
    Dixie.shapeColor = "red";
  //refering foodStock 
    foodStock = database.ref("food");
  //listesing the changes via readStock
    foodStock.on("value",readStock);

}

function draw(){
    background(46,139,87);
  // adding image to Dixie for more attraction in the program
    Dixie.addImage(Dixie_Img);
  //setting a condition when up arrow key , then to show the food stock and changing image of Dixie
      if(keyWentDown(UP_ARROW)){
          //calling writeStock function
            writeStock(foodS);
          //expressing when have food she becomes happy and active
            Dixie.addImage(happyDixie);
      }
    
  //displaying everything
    drawSprites();
}

function readStock(data){
 //reading the value of food 
  foodS = data.val();
}

function writeStock(x){
  //syncronizing the program
    database.ref("/").update({
       food:x
    });
    
}



