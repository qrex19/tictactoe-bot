const gameStatus = (() => {
  //logic here

  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function userWin(board) {
    for (let i = 0; i < winPattern.length; i++) {
      if (
        board[winPattern[i][0]].index.innerHTML == xImage &&
        board[winPattern[i][1]].index.innerHTML == xImage &&
        board[winPattern[i][2]].index.innerHTML == xImage
      ) {
        return true;
      }
    }

    return false;
  }

  function computerWin(board) {
    for (let i = 0; i < winPattern.length; i++) {
      if (
        board[winPattern[i][0]].index.innerHTML == oImage &&
        board[winPattern[i][1]].index.innerHTML == oImage &&
        board[winPattern[i][2]].index.innerHTML == oImage
      ) {
        return true;
      }
    }

    return false;
  }

  function gameDraw(board) {

    let con = true;
    
    for(let i = 0; i < board.length; i++) {

      if(board[i].index.innerHTML == xImage || board[i].index.innerHTML == oImage) {
        continue;
      }else {
        con = false;
        break;
      }

      

    }

    return con;

  }

  function gameDrawMessage() {
    const place = document.querySelector(".message");
    place.innerHTML = "<h1>Game Draw!</h1>";
  }

  function congratulate(text) {
    const winningMessage = `<h1>Haha, ${text} won!</h1>`;
    const place = document.querySelector(".message");
    place.innerHTML = winningMessage;
  }

  return { userWin, congratulate, computerWin, gameDraw, gameDrawMessage };
})();

function checkStatus() {
  if (gameStatus.userWin(board) == true) {
    gameStatus.congratulate("X");
  }else if (gameStatus.computerWin(board) == true) {
    gameStatus.congratulate("O");
  } else if (gameStatus.gameDraw(board) == true) {
    gameStatus.gameDrawMessage();
  }
}

const xImage = '<img src="./images/x.png" alt="">';
const oImage = '<img src="./images/o.png" alt="">';

let turn = true; //! true for 'x' turn, false for 'y' turn

const buttonObject = (number) => {
  const index = document.querySelector(`.${number}`);

  index.addEventListener('click', () => {

    if(index.innerHTML != xImage && index.innerHTML != oImage && turn == true) {
      index.innerHTML = xImage
      turn = false;
      checkStatus();
    }else if(index.innerHTML != xImage && index.innerHTML != oImage && turn == false){
      index.innerHTML = oImage
      turn = true;
      checkStatus();
    }
  })

  return { index };
};

let board = [];
board.length = 9;

const index = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

for (let i = 0; i < board.length; i++) {
  board[i] = buttonObject(index[i]);
}