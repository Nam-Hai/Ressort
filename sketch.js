let poid;

function setup() {
  createCanvas(400, 400);

  poid = new Poid();
}

function draw() {
  background(220);
  translate(width / 2, height / 2)
  poid.update();

  if (mouseIsPressed && mouseX - width / 2 >= -25 && mouseX - width / 2 <= 25) {
    poid.isDragged();
  } else {
    poid.show();
  }

}
