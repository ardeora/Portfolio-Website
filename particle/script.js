// Change These Variables Only
let WIX_FRAME_WIDTH = 426; // in Pixels, Duh
let WIX_FRAME_HEIGHT = 472;
let CIRCLE_RADIUS = 1;
let CIRCLE_DENSITY = 1.0; // Increases the number of circles per unit area, but sacrifices computation speed, will take decimal values too. Also, try to increase circle_radius first. If that doesn't work then try increasing density by .25
let IMAGE_NAME = "Antigravity Astronaut.png";
let BACKGROUND_COLOR = '#455A64'

// Dont Change Anything Below
var png = new Image();
png.onload = drawScene;
png.src = "img/"+IMAGE_NAME;

var	vehicles = [];
var canvas = document.getElementById("scene");
var ctx  = canvas.getContext("2d");

function drawScene(){

  var node = document.createElement("style");                 // Create a <li> node
  var textnode = document.createTextNode(`html,body {background: ${BACKGROUND_COLOR}; margin: 0; width: ${WIX_FRAME_WIDTH}px; height: ${WIX_FRAME_HEIGHT + 80}px;}`);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementsByTagName('head')[0].appendChild(node);

  var h = Math.round((WIX_FRAME_HEIGHT/WIX_FRAME_WIDTH)*CIRCLE_DENSITY*100);
  var w = CIRCLE_DENSITY*100;
  canvas.width = WIX_FRAME_WIDTH;
  canvas.height = WIX_FRAME_HEIGHT + MOUSE_RADIUS + 10;

  var scaleFactor = Math.round(WIX_FRAME_HEIGHT/h);
  console.log('Scalefactor:', scaleFactor);
  ctx.drawImage(png, 0, 0, w, h);
  var data = ctx.getImageData(0, 0, w, h);
  ctx.clearRect(0,0,canvas.width, canvas.height);


  for (var y = 0, y2 = data.height; y < y2; y++) {
    for (var x = 0, x2 = data.width; x < x2; x++) {
      if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
        var circColor = `rgba( ${data.data[(y * 4 * data.width) + (x * 4)]}, ${data.data[(y * 4 * data.width) + (x * 4) + 1]}, ${data.data[(y * 4 * data.width) + (x * 4) + 2]}, 1)`;
        var vehicle = new Vehicle(x*scaleFactor+10,y*scaleFactor+10,CIRCLE_RADIUS, circColor);
        vehicles.push(vehicle);
      }
    }
  }
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(var i=0, j=vehicles.length;i<j;i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show(ctx);
  }
}
