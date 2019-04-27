// Change These Variables Only
// Play with these numbers to see effects on interactivity with the cursor

// Arrival: These variables affect how much force is exerted on each circle when it's away from its target
let ARRIVAL_MAXSPEED = 3;
let ARRIVAL_MAXFORCE = 1;

// Flee: These variables affect how much force is exerted on each circle when mouse enters
let FLEE_MAXSPEED = 3;
let FLEE_MAXFORCE = 1;
let MOUSE_RADIUS = 80;

// Dont Change Anything Below

function Vector(x,y) {
  this.x = x;
  this.y = y;
  this.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  this.mult = function(num){
    this.x = this.x * num;
    this.y = this.y * num;
  }

  this.mag = function(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }

  this.setMag = function(num){
    var mag = this.mag();
    if (mag != 0) {
      this.x = (this.x * num)/mag;
      this.y = (this.y * num)/mag;
    }
  }

  this.limit = function(num){
    var mag = this.mag();
    if ((mag*mag) > (num*num) && mag !=0) {
      this.x = (this.x/mag)*num;
      this.y = (this.y/mag)*num;
    }
  }
}

var mymouse = {
  x: undefined,
  y: undefined
}

var canvas2 = document.getElementById("scene");
window.addEventListener('mousemove', function(event){
  mymouse.x = event.x;
  mymouse.y = event.y;

})

function Vehicle(x, y, radius, color){
  this.pos = new Vector(Math.random()*canvas2.width, Math.random()*canvas2.height);
  this.target = new Vector(x,y);
  this.radius = radius;
  this.color = color;
  // this.vel = new Vector(0,0);
  this.vel = helperFunctions.randomVector();
  this.acc = new Vector(0,0);
}

var helperFunctions = {
  sub: function(v1,v2) {
    var a = v1.x - v2.x;
    var b = v1.y - v2.y;
    var newVec = new Vector(a,b);
    return newVec;
  },
  randomVector: function(){
    var angle = Math.random() * 2 * Math.PI;
    var newVec = new Vector(Math.cos(angle),Math.sin(angle));
    return newVec;
  },

  myMap: function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  }
}

Vehicle.prototype.arrive = function(target) {
  var desired = helperFunctions.sub(target, this.pos);

  var d = desired.mag();
  var speed = ARRIVAL_MAXSPEED;
  if (d<100) {
    speed = helperFunctions.myMap(d,0,100,0,ARRIVAL_MAXSPEED);
  }
  desired.setMag(speed);

  var steer = helperFunctions.sub(desired, this.vel);
  steer.limit(ARRIVAL_MAXFORCE);
  return steer;
}

Vehicle.prototype.flee = function(target) {

  var desired = helperFunctions.sub(target, this.pos);
  var d = desired.mag();
  if (d < MOUSE_RADIUS){
    desired.setMag(FLEE_MAXSPEED);

    desired.mult(-1);
    var steer = helperFunctions.sub(desired, this.vel);
    steer.limit(FLEE_MAXFORCE);

    return steer;

  } else {
    var vecty = new Vector(0,0);
    return vecty;

  }

}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);


  var flee = this.flee(mymouse);

  arrive.mult(1);
  flee.mult(1.5);
  this.applyForce(arrive);;
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}
Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function(ctx) {

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos.x,this.pos.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}
