var clicks = 0;
function count(number) {
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
  };

var buildings = 0;
function buyBuilding() {
  var buildingCost = Math.floor(10 * Math.pow(1.1,buildings)); //cost function
  if (clicks >= buildingCost) { //has sufficient clicks
    buildings = buildings + 1; //add building
    clicks = clicks - buildingCost; //substract cost
    document.getElementById("buildings").innerHTML = buildings;
    document.getElementById("clicks").innerHTML = clicks;
  };
  var newCost = Math.floor(10 * Math.pow(1.1,buildings));
  document.getElementById("buildingCost").innerHTML = newCost;
};

function speed() {
  var rate = buildings; //sum of all generators
  document.getElementById("rate").innerHTML = rate;
};

///save game
var game = {
  clicks: clicks,
  buildings: buildings
};

function save() {
  localStorage["savegame"] = JSON.encode(save);
};

function load() {
  var game = JSON.decode(localStorage["savegame"]);
};

//if (typeof save.clicks !== "undefined") clicks = save.clicks;
//if (typeof save.buildings !== "undefined") buildings = save.buildings;

///

window.setInterval(function(){
  count(buildings)
},1000) //function fires every 1000ms == 1s
