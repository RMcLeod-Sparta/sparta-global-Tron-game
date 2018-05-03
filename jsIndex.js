var bikeX = 6;
var bikeY = 25;
var bikeX2 = 44;
var bikeY2 = 25;
var bikeX3 = 25;
var bikeY3 = 6;
var bikeX4 = 25;
var bikeY4 = 44;
var height = 50;
var width  = 50;
var trailX = [bikeX];
var trailY = [bikeY];
var trailX2 = [bikeX2];
var trailY2 = [bikeY2];
var trailX3 = [bikeX3];
var trailY3 = [bikeY3];
var trailX4 = [bikeX4];
var trailY4 = [bikeY4];
var running = false;
var gameOver = false;
var direction = 2; // up = 0, down = -1, left = 1, right = 2;
var direction2 = 1;
var direction3 = -1;
var direction4 = 0;
var int;
var interval = 110;
var length = 0;
var length2 = 0;
var p1Dead = false;
var p2Dead = false;
var p3Dead = false;
var p4Dead = false;
var propRest = 0;
var gameMusic = new Audio("GameMusic.mp3");


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
  int = setInterval(gameLoop, interval);
}

function removePlayer1(){
  $("td").removeClass("trail")
  $("td").removeClass("bike1")
  p1Dead = true;
}
function removePlayer2(){
  $("td").removeClass("trail2")
  $("td").removeClass("bike2")
  p2Dead = true;
}
function removePlayer3(){
  $("td").removeClass("trail3")
  $("td").removeClass("bike3")
  p3Dead = true;
}
function removePlayer4(){
  $("td").removeClass("trail4")
  $("td").removeClass("bike4")
  p4Dead = true;
}

function restart(){
  p1Dead = false;
  p2Dead = false;
  p3Dead = false;
  p4Dead = false;
  bikeX = 6;
  bikeY = 25;
  bikeX2 = 44;
  bikeY2 = 25;
  bikeX3 = 25;
  bikeY3 = 6;
  bikeX4 = 25;
  bikeY4 = 44;
  direction = 2;
  direction2 = 1;
  direction3 = -1;
  direction4 = 0;
}
//the update function runs every 110 miliseconds
function update (){
  updateTrail();
  if(p1Dead == false){
    player1();
  }
  if(p2Dead == false){
    player2();
  }
  if(p3Dead == false){
    player3();
  }
  if(p4Dead == false){
    player4();
  }

//The conditions for player 1 losing
  var p1overlaps = ($(".bike1").collision(".trail"));
  if(p1overlaps.length > 0){
    removePlayer1();
  }
  var p1overlaps2 = ($(".bike1").collision( ".trail2"));
  if(p1overlaps2.length > 0){
    removePlayer1();
  }
  var p1overlaps3 = ($(".bike1").collision( ".trail3"));
  if(p1overlaps3.length > 0){
    removePlayer1();
  }
  var p1overlaps4 = ($(".bike1").collision( ".trail4"));
  if(p1overlaps4.length > 0){
    removePlayer1();
  }
//The conditions for player 2 losing
  var p2overlaps = ($(".bike2").collision(".trail"));
  if(p2overlaps.length > 0){
    removePlayer2();
  }
  var p2overlaps2 = ($(".bike2").collision(".trail2"));
  if(p2overlaps2.length > 0){
    removePlayer2();
  }
  var p2overlaps3 = ($(".bike2").collision(".trail3"));
  if(p2overlaps3.length > 0){
    removePlayer2();
  }
  var p2overlaps4 = ($(".bike2").collision(".trail4"));
  if(p2overlaps4.length > 0){
    removePlayer2();
  }
//The conditions for player 3 losing
  var p3overlaps = ($(".bike3").collision(".trail"));
  if(p3overlaps.length > 0){
    removePlayer3();
  }
  var p3overlaps2 = ($(".bike3").collision(".trail2"));
  if(p3overlaps2.length > 0){
    removePlayer3();
  }
  var p3overlaps3 = ($(".bike3").collision(".trail3"));
  if(p3overlaps3.length > 0){
    removePlayer3();
  }
  var p3overlaps4 = ($(".bike3").collision(".trail4"));
  if(p3overlaps4.length > 0){
    removePlayer3();
  }
//The conditions for player 4 losing
  var p4overlaps = ($(".bike4").collision(".trail"));
  if(p4overlaps.length > 0){
    removePlayer4();
  }
  var p4overlaps2 = ($(".bike4").collision(".trail2"));
  if(p4overlaps2.length > 0){
    removePlayer4();
  }
  var p4overlaps3 = ($(".bike4").collision(".trail3"));
  if(p4overlaps3.length > 0){
    removePlayer4();
  }
  var p4overlaps4 = ($(".bike4").collision(".trail4"));
  if(p4overlaps4.length > 0){
    removePlayer4();
  }
//The conditons for 2 players losing at once
  var draw = ($(".bike1").collision( ".bike2"))
  if(draw.length > 0){
    removePlayer1();
    removePlayer2();
  }
  var draw2 = ($(".bike1").collision( ".bike3"))
  if(draw2.length > 0){
    removePlayer1();
    removePlayer3();
  }
  var draw3 = ($(".bike1").collision( ".bike4"))
  if(draw3.length > 0){
    removePlayer1();
    removePlayer4();
  }
  var draw4 = ($(".bike2").collision( ".bike3"))
  if(draw4.length > 0){
    removePlayer2();
    removePlayer3();
  }
  var draw5 = ($(".bike2").collision( ".bike4"))
  if(draw5.length > 0){
    removePlayer2();
    removePlayer4();
  }
  var draw6 = ($(".bike3").collision( ".bike4"))
  if(draw6.length > 0){
    removePlayer3();
    removePlayer4();
  }
//A player hitting the wall
  if(bikeX == 0 || bikeX == width-1 || bikeY == 0 || bikeY == height-1){
    removePlayer1();
  }else if(bikeX2 == 0 || bikeX2 == width-1 || bikeY2 == 0 || bikeY2 == height-1){
    removePlayer2();
  }else if(bikeX3 == 0 || bikeX3 == width-1 || bikeY3 == 0 || bikeY3 == height-1){
    removePlayer3();
  }else if(bikeX4 == 0 || bikeX4 == width-1 || bikeY4 == 0 || bikeY4 == height-1){
    removePlayer4();
  }
//Displays the relevant winner depending on who remains.
  if(p2Dead == true && p3Dead == true && p4Dead == true && p1Dead == false){
    document.getElementById("result").innerHTML = "The Winner Is: Blue";
    document.getElementById("result").style.color = "deepskyblue";
    running = false;
  }else if(p1Dead == true && p3Dead == true && p4Dead == true && p2Dead == false){
    document.getElementById("result").innerHTML = "The Winner Is: Orange";
    document.getElementById("result").style.color = "darkorange";
    running = false;
  }else if(p1Dead == true && p2Dead == true && p4Dead == true && p3Dead == false){
    document.getElementById("result").innerHTML = "The Winner Is: Red";
    document.getElementById("result").style.color = "red";
    running = false;
  }else if(p1Dead == true && p2Dead == true && p3Dead == true && p4Dead == false){
    document.getElementById("result").innerHTML = "The Winner Is: Purple";
    document.getElementById("result").style.color = "purple";
    running = false;
  }else if(p1Dead == true && p2Dead == true && p3Dead == true && p4Dead == true){
    document.getElementById("result").innerHTML = "It's A Draw";
    document.getElementById("result").style.color = "yellow";
    running = false;
  }else{
    document.getElementById("result").innerHTML = "";
  }
}//End of update

// player 1's
function player1(){
  set((trailX[length]), (trailY[length]), "trail");
  if(direction == 0){ // up = 0, down = -1, left = 1, right = 2;
    bikeY--;
  }
  else if(direction == -1){
    bikeY++;
  }
  else if(direction == 1){
    bikeX--;
  }
  else if(direction == 2){
    bikeX++;
  }
   setB(bikeX, bikeY, "bike1");
}

function player2(){
  set((trailX2[length2]), (trailY2[length2]), "trail2");
  if(direction2 == 0){ // up = 0, down = -1, left = 1, right = 2;
    bikeY2--;
  }
  else if(direction2 == -1){
    bikeY2++;
  }
  else if(direction2 == 1){
    bikeX2--;
  }
  else if(direction2 == 2){
    bikeX2++;
  }
   setB(bikeX2, bikeY2, "bike2");
}
function player3(){
  set((trailX3[length]), (trailY3[length]), "trail3");
  if(direction3 == 0){ // up = 0, down = -1, left = 1, right = 2;
    bikeY3--;
  }
  else if(direction3 == -1){
    lagUp3=-1;
    lagSide3=0;
    bikeY3++;
  }
  else if(direction3 == 1){
    lagUp3=0;
    lagSide3=1;
    bikeX3--;
  }
  else if(direction3 == 2){
    lagUp3=0;
    lagSide3=-1;
    bikeX3++;
  }
   setB(bikeX3, bikeY3, "bike3");
}
function player4(){
  set((trailX4[length]), (trailY4[length]), "trail4");
  if(direction4 == 0){ // up = 0, down = -1, left = 1, right = 2;
    bikeY4--;
  }
  else if(direction4 == -1){
    bikeY4++;
  }
  else if(direction4 == 1){
    bikeX4--;
  }
  else if(direction4 == 2){
    bikeX4++;
  }
   setB(bikeX4, bikeY4, "bike4");
}

function updateTrail(){
  for (var i = length; i > 0; i--) {
    bikeX[i] = trailX[i-1];
    bikeY[i] = trailY[i-1];
    bikeX2[i] = trailX2[i-1];
    bikeY2[i] = trailY2[i-1];
    bikeX3[i] = trailX3[i-1];
    bikeY3[i] = trailY3[i-1];
    bikeX4[i] = trailX4[i-1];
    bikeY4[i] = trailY4[i-1];
  }
  trailX[0] = bikeX;
  trailY[0] = bikeY;
  trailX2[0] = bikeX2;
  trailY2[0] = bikeY2;
  trailX3[0] = bikeX3;
  trailY3[0] = bikeY3;
  trailX4[0] = bikeX4;
  trailY4[0] = bikeY4;
}

function getType(x,y){
return get(x,y).getAttribute("class");
}

function gameLoop(){
  if(running && !gameOver) {
    update();
  }else if(gameOver){
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
  if(direction != -1 && (key == 119 || key == 87)){
    direction = 0;
  }
  else if(direction != 0 && (key == 115 || key == 83)){
    direction = -1;
  }
  else if(direction != 2 && (key == 97 || key == 65)){
    direction = 1;
  }
  else if(direction != 1 && (key == 100 || key == 68)){
    direction = 2;
  }
  else if(direction3 != -1 && (key == 84 || key == 116)){
    direction3 = 0;
  }
  else if(direction3 != 0 && (key == 71 || key == 103)){
    direction3 = -1;
  }
  else if(direction3 != 2 && (key == 70 || key == 102)){
    direction3 = 1;
  }
  else if(direction3 != 1 && (key == 72 || key == 104)){
    direction3 = 2;
  }
  else if(direction2 != -1 && (key == 105 || key == 73)){
    direction2 = 0;
  }
  else if(direction2 != 0 && (key == 107 || key == 75)){
    direction2 = -1;
  }
  else if(direction2 != 2 && (key == 106 || key == 74)){
    direction2 = 1;
  }
  else if(direction2 != 1 && (key == 108 || key == 76)){
    direction2 = 2;
  }
  else if(direction4 != -1 && (key == 123 || key == 91)){
    direction4 = 0;
  }
  else if(direction4 != 0 && (key == 34 || key == 39)){
    direction4 = -1;
  }
  else if(direction4 != 2 && (key == 58 || key == 59)){
    direction4 = 1;
  }
  else if(direction4 != 1 && (key == 124 || key == 92)){
    direction4 = 2;
  }else if(key == 49 || key == 33){
    restart();
    removePlayer2();
    removePlayer3();
    removePlayer4();
    p2Dead = true;
    p3Dead = true;
    p4Dead = true;
  }else if(key == 50 || key == 64){
    restart();
    removePlayer3();
    removePlayer4();
    p3Dead = true;
    p4Dead = true;
  }else if(key == 51 || key == 35){
    restart();
    removePlayer4();
    p4Dead = true;
  }else if(key == 82 || key == 114 || key == 52 || key == 36){
    removePlayer1();
    removePlayer2();
    removePlayer3();
    removePlayer4();
    restart();
  }
  //Pause functionality
  if(!running){
    running = true;
  }
  else if(key == 112 || key == 80){
  //  console.log("start");
    running = false;
  }
  if(running){
    gameMusic.play();
  }
});
run();
