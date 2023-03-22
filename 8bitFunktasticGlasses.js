//
// genHeads – The 8-bit Funktastic Glasses
//
// Use this file in the p5.js editor – https://editor.p5js.org/
//
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(0);
  rect(30, 100, 340, 20);

  rect(50, 80, 140, 86);
  rect(210, 80, 140, 86);
  
  let x = 60;
  let y = 90;
  
  squares(x,y);
  
  x = 220;
  y = 90;

  squares(x,y);

  noLoop();
}

function squares(x, y) {
  let cols = 7;
  let rows = 4;
  let colors = ["#ff0000", "#00ff00", "#0000ff"];

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      fill(random(colors));
      rect(x, y, 12, 12);
      y += 18;
    }
    y = 90;
    x += 18;
  }
}
