let rTurn = true;

function isMan(a, b) {
  let mId = -1;
  for (let c = 0; c < men.length; c++) {
    if (men[c].x == a && men[c].y == b) {
      mId = c;
      break;
    }
  }
  return mId;
}

function displayValidMoves() {
  let num = isMan(cSelection[0], cSelection[1]);
  if (num != -1) {
    if (!xor(men[num].isRed, rTurn)) {
      if (men[num].isRed || (!men[num].isRed && men[num].kinged > 0)) {
        if (cSelection[1] - 1 >= 0 && isMan((cSelection[0] + 7) % 8, cSelection[1] - 1) == -1) {
          vMoves[0] = true;
          boardSelection[(cSelection[0] + 7) % 8][cSelection[1] - 1] = 2;
        }
        if (cSelection[1] - 2 >= 0 && ((isMan((cSelection[0] + 7) % 8, cSelection[1] - 1) != -1 ? men[isMan((cSelection[0] + 7) % 8, cSelection[1] - 1)].isRed != rTurn : false) && isMan((cSelection[0] + 6) % 8, cSelection[1] - 2) == -1)) {
          vMoves[1] = true;
          boardSelection[(cSelection[0] + 6) % 8][cSelection[1] - 2] = 2;
        }
        if (cSelection[1] - 1 >= 0 && isMan((cSelection[0] + 1) % 8, cSelection[1] - 1) == -1) {
          vMoves[2] = true;
          boardSelection[(cSelection[0] + 1) % 8][cSelection[1] - 1] = 2;
        }
        if (cSelection[1] - 2 >= 0 && ((isMan((cSelection[0] + 1) % 8, cSelection[1] - 1) != -1 ? men[isMan((cSelection[0] + 1) % 8, cSelection[1] - 1)].isRed != rTurn : false) && isMan((cSelection[0] + 2) % 8, cSelection[1] - 2) == -1)) {
          vMoves[3] = true;
          boardSelection[(cSelection[0] + 2) % 8][cSelection[1] - 2] = 2;
        }
      }
      if (!men[num].isRed || (men[num].isRed && men[num].kinged > 0)) {
        if (cSelection[1] + 1 <= 7 && isMan((cSelection[0] + 7) % 8, cSelection[1] + 1) == -1) {
          vMoves[4] = true;
          boardSelection[(cSelection[0] + 7) % 8][cSelection[1] + 1] = 2;
        }
        if (cSelection[1] + 2 <= 7 && ((isMan((cSelection[0] + 7) % 8, cSelection[1] + 1) != -1 ? men[isMan((cSelection[0] + 7) % 8, cSelection[1] + 1)].isRed != rTurn : false) && isMan((cSelection[0] + 6) % 8, cSelection[1] + 2) == -1)) {
          vMoves[5] = true;
          boardSelection[(cSelection[0] + 6) % 8][cSelection[1] + 2] = 2;
        }
        if (cSelection[1] + 1 <= 7 && isMan((cSelection[0] + 1) % 8, cSelection[1] + 1) == -1) {
          vMoves[6] = true;
          boardSelection[(cSelection[0] + 1) % 8][cSelection[1] + 1] = 2;
        }
        if (cSelection[1] + 2 <= 7 && ((isMan((cSelection[0] + 1) % 8, cSelection[1] + 1) != -1 ? men[isMan((cSelection[0] + 1) % 8, cSelection[1] + 1)].isRed != rTurn : false) && isMan((cSelection[0] + 2) % 8, cSelection[1] + 2) == -1)) {
          vMoves[7] = true;
          boardSelection[(cSelection[0] + 2) % 8][cSelection[1] + 2] = 2;
        }
      }
    }
  }
}

function xor(a, b) {
  return !((a && b) || (!a && !b));
}

function moveA() {
  if (vMoves[0]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 7) % 8, cSelection[1] - 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveB() {
  if (vMoves[1]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 6) % 8, cSelection[1] - 2);
    men.splice(isMan((cSelection[0] + 7) % 8, cSelection[1] - 1), 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveC() {
  if (vMoves[2]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 1) % 8, cSelection[1] - 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveD() {
  if (vMoves[3]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 2) % 8, cSelection[1] - 2);
    men.splice(isMan((cSelection[0] + 1) % 8, cSelection[1] - 1), 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveE() {
  if (vMoves[4]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 7) % 8, cSelection[1] + 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveF() {
  if (vMoves[5]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 6) % 8, cSelection[1] + 2);
    men.splice(isMan((cSelection[0] + 7) % 8, cSelection[1] + 1), 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function moveG() {
  if (vMoves[6]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 1) % 8, cSelection[1] + 1);
    kingAll();
    rTurn = !rTurn;

  }
}

function moveH() {
  if (vMoves[7]) {
    men[isMan(cSelection[0], cSelection[1])].moveTo((cSelection[0] + 2) % 8, cSelection[1] + 2);
    men.splice(isMan((cSelection[0] + 1) % 8, cSelection[1] + 1), 1);
    kingAll();
    rTurn = !rTurn;
  }
}

function checkWin() {
  let blackCheckerCount = 0;
  let redCheckerCount = 0;
  for (let i = 0; i < men.length; i++) {
    if (men[i].isRed) {
      redCheckerCount++;
    } else {
      blackCheckerCount++;
    }
  }
  if (blackCheckerCount == 0) {
    movetxt.html('Red Wins!!');
    noLoop();
  }
  if (redCheckerCount == 0) {
    movetxt.html('Black Wins!!');
    noLoop();
  }
}

function kingAll() {
  pieceSelection.value('');
  for (let i = 0; i < men.length; i++) {
    if ((men[i].isRed && men[i].y == 0) || (!men[i].isRed && men[i].y == 7)) {
      men[i].king();
    }
  }
}

let stalemateProgress = 0;

function findStaleMate() {
  let moveFound = false;
  for (let i = 0; i < men.length; i++) {
    if (men[i].isRed == rTurn) {
      if (men[i].isRed || (!men[i].isRed && men[i].kinged > 0)) {
        if (men[i].y - 1 >= 0 && isMan((men[i].x + 7) % 8, men[i].y - 1) == -1) {
          moveFound = true;
        }
        if (men[i].y - 2 >= 0 && (isMan((men[i].x + 7) % 8, men[i].y - 1) != -1 && isMan((men[i].x + 6) % 8, men[i].y - 2) == -1)) {
          if (men[isMan((men[i].x + 7) % 8, men[i].y - 1)].isRed != rTurn) {
            moveFound = true;
          }
        }
        if (men[i].y - 1 >= 0 && isMan((men[i].x + 1) % 8, men[i].y - 1) == -1) {
          moveFound = true;
        }
        if (men[i].y - 2 >= 0 && (isMan((men[i].x + 1) % 8, men[i].y - 1) != -1 && isMan((men[i].x + 2) % 8, men[i].y - 2) == -1)) {
          if (men[isMan((men[i].x + 1) % 8, men[i].y - 1)].isRed != rTurn) {
            moveFound = true;
          }
        }
      }
      if (!men[i].isRed || (men[i].isRed && men[i].kinged > 0)) {
        if (men[i].y + 1 <= 7 && isMan((men[i].x + 7) % 8, men[i].y + 1) == -1) {
          moveFound = true;
        }
        if (men[i].y + 2 <= 7 && (isMan((men[i].x + 7) % 8, men[i].y + 1) != -1 && isMan((men[i].x + 6) % 8, men[i].y + 2) == -1)) {
          if (men[isMan((men[i].x + 7) % 8, men[i].y + 1)].isRed != rTurn) {
            moveFound = true;
          }
        }
        if (men[i].y + 1 <= 7 && isMan((men[i].x + 1) % 8, men[i].y + 1) == -1) {
          moveFound = true;
        }
        if (men[i].y + 2 <= 7 && (isMan((men[i].x + 1) % 8, men[i].y + 1) != -1 && isMan((men[i].x + 2) % 8, men[i].y + 2) == -1)) {
          if (men[isMan((men[i].x + 1) % 8, men[i].y + 1)].isRed != rTurn) {
            moveFound = true;
          }

        }
      }
      if (moveFound) {
        stalemateProgress = 0;
        break;
      }
      if (!moveFound && stalemateProgress == 0) {
        stalemateProgress++;
        rTurn = !rTurn;
      }
      if (!moveFound && stalemateProgress == 1) {
        movetxt.html('Stalemate!');
        noLoop();
      }

    }
  }
}
