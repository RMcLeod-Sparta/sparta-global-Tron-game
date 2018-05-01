//player 1 and 2
var p1, p2;
var players = [p1, p2];
var bikeX = 5;
var bikeY = 25;
var bikeX2;
var bikeY2;
var height = 50;
var width  = 50;
var trailX = [bikeX];
var trailY = [bikeY];
// var trailX2 = [bikeX2];
// var trailY2 = [bikeY2];
var running = false;
var gameOver = false;
var direction = 2; // up = 0, down = -1, left = 1, right = 2;
var direction2 = 1;
var int;
var interval = 50;
var length = 0;
var lagUp = 0;
var lagSide = 0;

console.log(trailX);
console.log(trailY);


function get(x,y){
  return document.getElementById(x+"-"+y);
}

function set(x, y, value){
  get(x,y).setAttribute("class", value);
}
function setB(x, y, value){
  get(x,y).classList.add(value);
}

function createPlayer(){
  return setB(bikeX, bikeY, "bike1");
}
function createTrail(){
  return set(trailX, trailY, "trail");
}

function run(){
  createGrid();
  createPlayer();
  int = setInterval(gameLoop, interval);
  console.log("begin");
  // player2 = createPlayer(95,50,"bike2");
}

function update (){
  updateTrail();
  set((trailX[length]+lagSide), (trailY[length]+lagUp), "trail");
  if(direction == 0){ // up = 0, down = -1, left = 1, right = 2;
    lagUp=1;
    lagSide=0;
    bikeY--;
  }
  else if(direction == -1){
    lagUp=-1;
    lagSide=0;
    bikeY++;
  }
  else if(direction == 1){
    lagUp=0;
    lagSide=1;
    bikeX--;
  }
  else if(direction == 2){
    lagUp=0;
    lagSide=-1;
    bikeX++;
  }

   setB(bikeX, bikeY, "bike1");

 var overlaps = ($(".bike1").collision( ".trail"));
 if(overlaps.length > 0){
   document.location.reload();
 }

  if(bikeX == 0 || bikeX == width-1 || bikeY == 0 || bikeY == height-1){
    document.location.reload();
  }

  }


function updateTrail(){
  for (var i = length; i > 0; i--) {
    bikeX[i] = trailX[i-1];
    bikeY[i] = trailY[i-1];
    bikeX2[i] = trailX2[i-1];
    bikeY2[i] = trailY2[i-1];
  }
  trailX[0] = bikeX;
  trailY[0] = bikeY;
  trailX2[0] = bikeX2;
  trailY2[0] = bikeY2;
}



function getType(x,y){
return get(x,y).getAttribute("class");
}

function gameLoop(){
  if(running && !gameOver) {
    update();
  }else if(gameOver){
      console.log("over");
    document.location.reload();
  }
}
function createGrid(){
 document.write("<table>");
   for(var y = 0; y < height; y++){
     document.write("<tr>");
     for(var x = 0; x < width; x++){
       if(x == 0 || x == width-1 || y == 0 || y == height-1){
         document.write("<td class='wall' id='"+ x +"-"+ y +"'></th>");
       }else{
         document.write("<td class='blank' id='"+ x +"-"+ y +"'></td>");
       }
     }
     document.write("</tr>");
   }
 document.write("</table>");
};

window.addEventListener("keypress", function key(){
  var key = event.keyCode;
  //if key is W move up
  if(direction != -1 && (key == 119 || key == 87)){
    console.log("up");
    direction = 0;
  }
  //if key is S move down
  else if(direction != 0 && (key == 115 || key == 83)){
    console.log("down");
    direction = -1;
  }
  //if key is A move left
  else if(direction != 2 && (key == 97 || key == 65)){
    console.log("left");
    direction = 1;
  }
  //if key is D move right
  else if(direction != 1 && (key == 100 || key == 68)){
    console.log("right");
    direction = 2;
  }
  else if(direction2 != -1 && (key == 105 || key == 73)){
    console.log("up2");
    direction2 = 0;
  }
  else if(direction2 != 0 && (key == 107 || key == 75)){
    console.log("down2");
    direction2 = -1;
  }
  else if(direction2 != 2 && (key == 106 || key == 74)){
    console.log("left2");
    direction2 = 1;
  }
  else if(direction2 != 1 && (key == 108 || key == 76)){
    console.log("right2");
    direction2 = 2;
  }

  if(!running){
    running = true;
  }
  else if(key == 32){
    console.log("start");
    running = false;
}
});

run();
