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
var interval = 100;
var length = 0;
var length2 = 0;
var lagUp = 0;
var lagSide = 0;
var lagUp2 = 0;
var lagSide2 = 0;
var lagUp3 = 0;
var lagSide3 = 0;
var lagUp4 = 0;
var lagSide4 = 0;
var p1Dead = false;
var p2Dead = false;
var p3Dead = false;
var p4Dead = false;

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

function update (){
  updateTrail();
  if(p1Dead == false){
    player1();
  }
  if(p2Dead == false){
    player2();
  }
  // if(p3Dead == false){
  //   player3();
  // }
  // if(p4Dead == false){
  //   player4();
  // }

 var p1overlaps = ($(".bike1").collision(".trail"));
 if(p1overlaps.length > 0){
   document.getElementById("result").innerHTML = "Orange Wins!";
   p1Dead = true;
   $("td").removeClass("trail")
   $("td").removeClass("bike1")
   running = false;
 }
 var p1overlaps2 = ($(".bike1").collision( ".trail2"));
 if(p1overlaps2.length > 0){
   document.getElementById("result").innerHTML = "Orange Wins!";
   p1Dead = true;
   $("td").removeClass("trail");
   $("td").removeClass("bike1");
   running = false;
 }

 var p2overlaps = ($(".bike2").collision(".trail"));
 if(p2overlaps.length > 0){
   document.getElementById("result").innerHTML = "Blue Wins!";
   p2Dead = true;
   $("td").removeClass("trail2");
   $("td").removeClass("bike2");
   running = false;
 }
 var p2overlaps2 = ($(".bike2").collision( ".trail2"));
 if(p2overlaps2.length > 0){
   document.getElementById("result").innerHTML = "Blue Wins!";
   p2Dead = true;
   $("td").removeClass("trail2");
   $("td").removeClass("bike2");
   running = false;
 }

 var draw = ($(".bike1").collision( ".bike2"))
 if(draw.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p1Dead = true;
   p2Dead = true;
   $("td").removeClass("trail");
   $("td").removeClass("trail2");
   $("td").removeClass("bike1");
   $("td").removeClass("bike2");
//   running = false;
 }
 var draw2 = ($(".bike1").collision( ".bike3"))
 if(draw2.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p1Dead = true;
   p3Dead = true;
   $("td").removeClass("trail");
   $("td").removeClass("trail3");
   $("td").removeClass("bike1");
   $("td").removeClass("bike3");
//   running = false;
 }
 var draw3 = ($(".bike1").collision( ".bike4"))
 if(draw3.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p1Dead = true;
   p4Dead = true;
   $("td").removeClass("trail");
   $("td").removeClass("trail4");
   $("td").removeClass("bike1");
   $("td").removeClass("bike4");
//   running = false;
 }
 var draw4 = ($(".bike2").collision( ".bike3"))
 if(draw4.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p2Dead = true;
   p3Dead = true;
   $("td").removeClass("trail2");
   $("td").removeClass("trail3");
   $("td").removeClass("bike2");
   $("td").removeClass("bike3");
//   running = false;
 }
 var draw5 = ($(".bike2").collision( ".bike4"))
 if(draw5.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p2Dead = true;
   p4Dead = true;
   $("td").removeClass("trail2");
   $("td").removeClass("trail4");
   $("td").removeClass("bike2");
   $("td").removeClass("bike4");
 }
 var draw6 = ($(".bike3").collision( ".bike4"))
 if(draw6.length > 0){
   document.getElementById("result").innerHTML = "It's A Draw!";
   p3Dead = true;
   p4Dead = true;
   $("td").removeClass("trail3");
   $("td").removeClass("trail4");
   $("td").removeClass("bike3");
   $("td").removeClass("bike4");
   //running = false;
 }

  if(bikeX == 0 || bikeX == width-1 || bikeY == 0 || bikeY == height-1){
    document.getElementById("result").innerHTML = "Orange Wins!";
    running = false;
  }else if(bikeX2 == 0 || bikeX2 == width-1 || bikeY2 == 0 || bikeY2 == height-1){
      document.getElementById("result").innerHTML = "Blue Wins!";
    running = false;
  }

  }

function player1(){
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
}

function player2(){
  set((trailX2[length2]+lagSide2), (trailY2[length2]+lagUp2), "trail2");
  if(direction2 == 0){ // up = 0, down = -1, left = 1, right = 2;
    lagUp2=1;
    lagSide2=0;
    bikeY2--;
  }
  else if(direction2 == -1){
    lagUp2=-1;
    lagSide2=0;
    bikeY2++;
  }
  else if(direction2 == 1){
    lagUp2=0;
    lagSide2=1;
    bikeX2--;
  }
  else if(direction2 == 2){
    lagUp2=0;
    lagSide2=-1;
    bikeX2++;
  }
   setB(bikeX2, bikeY2, "bike2");
}
function player3(){
  set((trailX3[length]+lagSide3), (trailY3[length]+lagUp3), "trail3");
  if(direction3 == 0){ // up = 0, down = -1, left = 1, right = 2;
    lagUp3=1;
    lagSide3=0;
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
  set((trailX4[length]+lagSide4), (trailY4[length]+lagUp4), "trail4");
  if(direction4 == 0){ // up = 0, down = -1, left = 1, right = 2;
    lagUp4=1;
    lagSide4=0;
    bikeY4--;
  }
  else if(direction4 == -1){
    lagUp4=-1;
    lagSide4=0;
    bikeY4++;
  }
  else if(direction4 == 1){
    lagUp4=0;
    lagSide4=1;
    bikeX4--;
  }
  else if(direction4 == 2){
    lagUp4=0;
    lagSide4=-1;
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
  //    console.log("over");
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
    //console.log("up");
    direction = 0;
  }
  //if key is S move down
  else if(direction != 0 && (key == 115 || key == 83)){
  //  console.log("down");
    direction = -1;
  }
  //if key is A move left
  else if(direction != 2 && (key == 97 || key == 65)){
  //  console.log("left");
    direction = 1;
  }
  //if key is D move right
  else if(direction != 1 && (key == 100 || key == 68)){
  //  console.log("right");
    direction = 2;
  }
  else if(direction3 != -1 && (key == 84 || key == 116)){
    //console.log("up");
    direction3 = 0;
  }
  //if key is S move down
  else if(direction3 != 0 && (key == 71 || key == 103)){
  //  console.log("down");
    direction3 = -1;
  }
  //if key is A move left
  else if(direction3 != 2 && (key == 70 || key == 102)){
  //  console.log("left");
    direction3 = 1;
  }
  //if key is D move right
  else if(direction3 != 1 && (key == 72 || key == 104)){
  //  console.log("right");
    direction3 = 2;
  }
  else if(direction2 != -1 && (key == 105 || key == 73)){
  //  console.log("up2");
    direction2 = 0;
  }
  else if(direction2 != 0 && (key == 107 || key == 75)){
  //  console.log("down2");
    direction2 = -1;
  }
  else if(direction2 != 2 && (key == 106 || key == 74)){
  //  console.log("left2");
    direction2 = 1;
  }
  else if(direction2 != 1 && (key == 108 || key == 76)){
  //  console.log("right2");
    direction2 = 2;
  }
  else if(direction4 != -1 && (key == 123 || key == 91)){
  //  console.log("up2");
    direction4 = 0;
  }
  else if(direction4 != 0 && (key == 34 || key == 39)){
  //  console.log("down2");
    direction4 = -1;
  }
  else if(direction4 != 2 && (key == 58 || key == 59)){
  //  console.log("left2");
    direction4 = 1;
  }
  else if(direction4 != 1 && (key == 124 || key == 92)){
  //  console.log("right2");
    direction4 = 2;
  }
  else if(key == 82 || key == 114){
    document.location.reload();
  }

  if(!running){
    running = true;
  }
  else if(key == 32){
  //  console.log("start");
    running = false;
  }
});

run();
