function resetBoardSelectionArray() {
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      boardSelection[i][j] = 0;
    }
  }
  if (pieceSelection.value() != '') {
    let a = cSelection[0];
    let b = cSelection[1];
    if ((0 <= a && a <= 7) && (0 <= b && b <= 7)) {
      boardSelection[a][b] = 1;
    }
  }
  for (let i = 0; i <= 7; i++) {
    vMoves[i] = false;
  }
}

let a = 0;
let moving = false;

function rotateCamera() {
  if ((a < 180 && !moving && !rTurn) || (a > 0 && !moving && rTurn)) {
    moving = true;
  }
  if (a < 180 && moving && !rTurn) {
    a += 5;
  }
  if (a > 0 && moving && rTurn) {
    a -= 5;
  }
  if (a >= 180 && moving && !rTurn) {
    moving = false;
    a = 180;
  }
  if (a <= 0 && moving && rTurn) {
    moving = false;
    a = 0;
  }
  let angle = map(a, 0, 180, 0, PI);
  let camRad = 700;
  cam.setPosition(camRad * cos(angle+PI/2), -700, camRad * sin(angle+PI/2));
  cam.lookAt(0, 0, 0);
}

function drawLetters() {
  if(!wrapBox.checked()) {
    for (let i = PI/2; i<=3*PI/2;i+=PI) {
      push();
      rotate(i);
      text();
      pop();
    }
  }
}