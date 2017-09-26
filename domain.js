/*
https://api.builtwith.com/v12/api.json?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0&LOOKUP=builtwith.com
*/


// var url = "https://cors-anywhere.herokuapp.com/https://api.builtwith.com/v12/api.json?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0&LOOKUP=builtwith.com";

var hero = "https://cors-anywhere.herokuapp.com/";
var api = "https://api.builtwith.com/v12/api.json";
var apiKey ="?KEY=116f5aaa-b433-4c5e-bc09-96e8b2140fa0&LOOKUP=";
// var q="&LOOKUP=builtwith.com";
var input;

function setup() {
  noCanvas();

  var button = select('#submit');
  button.mousePressed(askUrl);

  input = select('#site');
}

function askUrl() {
  var url = hero + api + apiKey + input.value();
  loadJSON(url, gotData);
}

function gotData(data) {
  if (data.Results.Result.Paths.Technologies) {
    for (i = 0; i < data.Results.Result.Paths.Technologies.length; i++) {
      print(data.Results[i].Result.Paths[i].Technologies[i].Name);
      print(data.Results[i].Result.Paths[i].Technologies[i].Categories[i]);
    }
  }
  // for (i=0; i < data.Results.Result.Paths.Technologies.length; i++) {
  //
  // }
}
