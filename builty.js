/*
https://api.builtwith.com/free1/api.json?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0&LOOKUP=builtwith.com
*/

var canvas;
var url = "https://cors-anywhere.herokuapp.com/https://api.builtwith.com/free1/api.json?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0&LOOKUP=builtwith.com";
// var api = "https://api.builtwith.com/free1/api.json";
// var apiKey ="?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0";
// var q="&LOOKUP=builtwith.com";

function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  for (i=0; i < data.groups.length; i++) {
  }
}

function canvas() {
  new p5.Table();
  set("Technology");
  new p5.TableRow();
  set(data.groups[i].name);
}
