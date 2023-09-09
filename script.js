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

  function gameDraw(board, optionsArr) {
    if (
      userWin(board) == false &&
      computerWin(board) == false &&
      optionsArr.length == 0
    ) {
      return true;
    }

    return false;
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
  if (gameStatus.computerWin(board) == true) {
    gameStatus.congratulate("computer");
  } else if (gameStatus.userWin(board) == true) {
    gameStatus.congratulate("you");
  } else if (gameStatus.gameDraw(board, optionsArr) == true) {
    gameStatus.gameDrawMessage();
  }
}

const xImage = '<img src="./images/x.png" alt="">';
const oImage = '<img src="./images/o.png" alt="">';

const buttonObject = (number) => {
  const index = document.querySelector(`.${number}`);

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

//* to generate a random number between 0 and 8 (both inclusive)

function returnIndex(arr, target) {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] == target) {
      return a;
    }
  }
}

let optionsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function usersTurn(object, i) {
  if (object.index.innerHTML != oImage && object.index.innerHTML != xImage) {
    object.index.innerHTML = xImage;
    optionsArr.splice(returnIndex(optionsArr, i), 1);
    checkStatus();
  }
}

function computersTurn() {
  //* This algo works for now but improve it to make the tictactoe bot better

  let num = optionsArr[Math.floor(Math.random() * optionsArr.length)];

  board[num].index.innerHTML = oImage;
  optionsArr.splice(returnIndex(optionsArr, num), 1);
  checkStatus();
}


function game() {
  for (let i = 0; i < board.length; i++) {
    board[i].index.addEventListener("click", () => {

      usersTurn(board[i], i);
      
      setTimeout(computersTurn, 300);
      
    });
  }
}

//* The gameplay function
game();
