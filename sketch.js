// costants
let bc;
let rc;
let wrapH;
let boardSelection = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
let cSelection = [];
let vMoves = [];
//js object lists
let men;

//models
let checkerpiece;
let crown;
let logoImg;


function preload() {
  checkerpiece = loadModel('Assets/checkerpiece.obj');
  crown = loadModel('Assets/crown.obj');
}

function setup() {
  var canvas = createCanvas(500, 400, WEBGL);
  cam = createCamera();
  cam.setPosition(700, -700, 700);
  cam.lookAt(0, 0, 0);
  GUI();
  canvas.position(0, 150)
  wrapH = 50 / tan(PI / 8);
  rc = color(191, 0, 0);
  bc = color(0, 0, 0);
  men = [];
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
      men.push(nMan((2 * j) + (i + 1) % 2, i, false))
    }
  }
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
      men.push(nMan((2 * j) + (i % 2), i + 5, true))
    }
  }
}

function draw() {
  lights();
  background(255);
  updateGUI();
  resetBoardSelectionArray();
  displayValidMoves();
  rotateCamera();
  drawBoard();
  updateButtons();
  
  for (let i = 0; i < men.length; i++) {
    men[i].disp();
  }
}

function drawBoard() {
  noStroke();
  push();
  translate(-350, -5, -350);
  rotateX(PI / 2);
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if ((i + j) % 2 == 0) {
        fill(rc);
      } else {
        fill(bc);
      }
      if (boardSelection[j][i] == 2) {
        fill(255, 255, 0)
      }
      if (wrapBox.checked()) {
        push();
        translate(350, 100 * i, 0);
        rotateY((j * PI / 4) + (frameCount / 120));
        translate(0, 0, wrapH - 5);
        box(100, 100, 10);
        if (boardSelection[j][i] == 1) {
          push();
          stroke(255, 255, 0, 191);
          noFill();
          strokeWeight(3);
          translate(0, 0, 30);
          box(100, 100, 50);
          pop();
        }
        pop();
      } else {
        push();
        translate(100 * j, 100 * i, 0);
        box(100, 100, 10);
        if (boardSelection[j][i] == 1) {
          push();
          stroke(255, 255, 0, 191);
          noFill();
          strokeWeight(3);
          translate(0, 0, 30);
          box(100, 100, 50);
          pop();
        }
        pop();
      }
    }
  }
  pop();
}