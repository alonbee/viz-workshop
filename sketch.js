function setup() {
  createCanvas(1780, 960);
  ellipse(50, 50, 80, 80);
}

function draw() {


  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
    stroke(255, 255, 255, 25);
  }
  rect(mouseX,mouseY,50,50);
  // ellipse(mouseX, mouseY, 80, 80);

}
