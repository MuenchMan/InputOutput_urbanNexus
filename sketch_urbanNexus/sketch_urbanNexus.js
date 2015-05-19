int screenWidth = 500;
int screenHeight = 500;
//int screenMiddleX = screenWidth/2;
//int screenMiddleY = screenHeight/2;
//int screenPercX = screenWidth/100;
//int screenPercY = screenHeight/100;

var minMapCoordinateX =
var maxMapCoordinateX =
var minMapCoordinateY =
var maxMapCoordinateY =

IntList geoPoints;


void setup() {
  size (screenWidth, screenHeight);
  noLoop();
  background(51);
}

void draw() {
}


//anonClass
function anonClass(originX, originY, liveX, liveY, liveOldX, liveOldY, workX, workY, partnerX, partnerY, friendX, friendY, foodX, foodY, barX, barY, relaxX, relaxY, emotionX, emotionY) {
  this.origin = origin;
  this.live = live;
  this.liveOld = liveOld;
  this.work = work;
  this.partner = partner;
  this.friend = friend;
  this.food = food;
  this.bar = bar;
  this.relax = relax;
  this.emotion = emotion;

  this.displayOrigin = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);

  this.home = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}