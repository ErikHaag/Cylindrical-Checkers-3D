let wrapBox;
let logo;
let pieceSelection;
let moveButtons = [];
let movetxt;
let nGamebutton;
let sgameB;
let loadG;

function GUI() {
  wrapBox = createCheckbox('Wrap Board', false);
  wrapBox.position(500, 430);
  logo = createImg('Assets/logo.png', 'ERROR');
  logo.position(0, 0);
  logo.size(300, 300 * logo.size().height / logo.size().width);
  for (let i = 0; i < 8; i++) {
    moveButtons.push(createButton(''));
    moveButtons[i].size(50, 50);
  }
  moveButtons[0].mousePressed(moveA);
  moveButtons[1].mousePressed(moveB);
  moveButtons[2].mousePressed(moveC);
  moveButtons[3].mousePressed(moveD);
  moveButtons[4].mousePressed(moveE);
  moveButtons[5].mousePressed(moveF);
  moveButtons[6].mousePressed(moveG);
  moveButtons[7].mousePressed(moveH);
  pieceSelection = createInput('');
  pieceSelection.position(550, 460);
  movetxt = createDiv('');
  movetxt.position(595, 215);
  movetxt.style('font-size:100px');
  movetxt.style('font-family: "Courier New", Courier, monospace');
  nGamebutton = createButton('New game');
  nGamebutton.position(550,500);
  nGamebutton.size(80,20);
  nGamebutton.mouseClicked(nGame);
  sgameB = createButton('download game state');
  sgameB.position(550, 525);
  sgameB.size(150, 20);
  sgameB.mouseClicked(saveGame);
  loadG = createFileInput(loadGame);
  loadG.position(550, 550);
  loadG.size(120,20);
}

function updateGUI() {
  if (pieceSelection.value() != '') {
    let a = unchar(split(pieceSelection.value(), '')[0].toUpperCase()) - 65;
    let b = int(split(pieceSelection.value(), '')[1]) - 1;
    cSelection = [a, b];
    if (isMan(a, b) != -1) {
      movetxt.html('o');
      if (men[isMan(a, b)].isRed) {
        movetxt.style('color: #FF0000');
      } else {
        movetxt.style('color: #000000');
      }
    } else {
      movetxt.html('');
    }
  } else {
    movetxt.html('');
  }
  let i = 0;
  for (let a = -1; a <= 1; a += 2) {
    for (let b = -1; b <= 1; b += 2) {
      for (let c = 1; c <= 2; c++) {
        moveButtons[i].position(50 * ((rTurn) ? 1 : -1) * (b * c) + 600, 50 * ((rTurn) ? 1 : -1) * (a * c) + 250);
        i++;
      }
    }
  }
}

function updateButtons() {
  for (let i = 0; i <= 7; i++) {
    if (vMoves[i]) {
      moveButtons[i].style('background-color:#00FF00;');
      moveButtons[i].style('border: 5px solid #00B100;');
    } else {
      moveButtons[i].style('background-color:#FF0000');
      moveButtons[i].style('border: 5px solid #B10000;');
    }
  }
}

function nGame() {
  loop();
  let tMen = [];
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
      tMen.push(nMan((2 * j) + (i + 1) % 2, i, false,false));
    }
  }
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
      tMen.push(nMan((2 * j) + (i % 2), i + 5, true,false));
    }
  }
  men = tMen;
  rTurn = true;
  a = 0;
  pieceSelection.value('');
  wrapBox.checked(false);
}
