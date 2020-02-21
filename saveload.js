function saveGame() {
  let gameState = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if ((i+j)%2 == 1) {
        let val = isMan(j,i);
        if (val == -1) {
          gameState.push('0');
        }else{ 
          if (men[val].isRed) {
            if (men[val].kinged == 0) {
              gameState.push('1');
            }else {
              gameState.push('2');
            }
          }else {
            if (men[val].kinged == 0) {
              gameState.push('3');
            }else {
              gameState.push('4');
            }
          }
        }
      }
    }
  }
  gameState.push((rTurn?1:0));
  save(gameState, 'egGame.txt');
}

function loadGame(game) {
  if (game.type == 'text') {
    let tMen = []
    let extraction = split(game.data, '\n');
    extraction.pop();
    for (let i = 0; i <= 31; i++) {
      extraction = int(extraction);
    }
    let index = 0;
    for (let i = 0; i <= 7; i++) {
      for (let j = (i+1)%2; j <= 7; j += 2) {
        if (extraction[index] != 0) {
          if (extraction[index] == 1) {
            tMen.push(nMan(j,i,true,false));
          }else if (extraction[index] == 2) {
            tMen.push(nMan(j,i,true,true));
          }else if (extraction[index] == 3) {
            tMen.push(nMan(j,i,false,false));
          }else if (extraction[index] == 4) {
            tMen.push(nMan(j,i,false,true));
          }
        }
        index++
      }
    }
    rTurn = (extraction[32] == 1?true:false)
    men = tMen;
  }
}
