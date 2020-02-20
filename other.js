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
  cam.setPosition(camRad * cos(angle + PI / 2), -700, camRad * sin(angle + PI / 2));
  cam.lookAt(0, 0, 0);
}

function drawCoords() {
  if (!wrapBox.checked()) {
    textFont(sCP, 50);
    fill(0, 0, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    for (let i = 0; i <= PI; i += PI) {
      push();
      rotateY(i);
      rotateX(PI / 2);
      for (let j = 0; j <= 7; j++) {
        text(char(j + 65), (100 * (j - 4) + 50) * (i == 0 ? 1 : -1), 450);
        text(j + 1, 450, (100 * (j - 4) + 50) * (i == 0 ? 1 : -1));
      }
      pop();
    }
  }
}