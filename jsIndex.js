//player 1 and 2
var p1, p2;
var players = [p1, p2];
var bikeX;
var bikeY;
var height = 100;
var width = 100;
var trailX = [bikeX];
var trailY = [bikeY];


function get(x,y){
  return document.getElementById(x+"-"+y);
}

function set(x, y, value){
  get(x,y).setAttribute("class", value);
}

function createPlayer(bikeX, bikeY, playerNum){
  return set(bikeX, bikeY, playerNum);
}

function start (){
  createGrid();
  createPlayer(5,50,"bike1");
  createPlayer(95,50,"bike2");
}

function update (){
  start();
  console.log("done");
}

function getType(x,y){
return get(x,y).getAttribute("class");
}
update();

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
