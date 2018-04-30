//player 1 and 2
var p1, p2;
var players = [p1, p2];
var bikeX = 2;
var bikeY = 2;
var height = 100;
var width = 100;
var trailX = [bikeX];
var trailY = [bikeY];
var running = false;
var gameOver = false;
var direction = -1; // up = 0, down = -1, left = 1, right = 2;
var int;
var interval = 50;


function get(x,y){
  return document.getElementById(x+"-"+y);
}

function set(x, y, value){
    get(x,y).setAttribute("class", value);
}

function createPlayer(){
  return set(bikeX, bikeY, "class");
}

function run(){
  createGrid();
  createPlayer();
  int = setInterval(gameLoop, interval);
  // player2 = createPlayer(95,50,"bike2");
}

function update (){
  console.log("done");
  set(trailX[length], trailY[length], "blank");
  if(direction == 0)
    bikeY--;
  else if(direction == -1)
    bikeY++;
  else if(direction == 1)
    bikeX--;
  else if(direction == 2)
    bikeX++;

  set(bikeX, bikeY, "bike1");
}



function updateTrail(){
  for (var i = length; i > 0; i--) {
    bikeX[i] = trailX[i-1];
    bikeY[i] = trailY[i-1];
  }
  trailX[0] = bikeX;
  trailY[0] = bikeY;
}



function getType(x,y){
return get(x,y).getAttribute("class");
}
function gameLoop(){
  if(running && !gameOver) {
    console.log("running");
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
         document.write("<td class='wall' id='"+ x +"-"+ y +"'></td>");
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

  if(!running){
    running = true;
  }
  else if(key == 32){
    console.log("start");
    running = false;
  }
});
run();
