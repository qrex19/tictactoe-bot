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
  }
}

function computersTurn() {
  //! This algo works for now but improve it to make the tictactoe bot better

  let num = optionsArr[Math.floor(Math.random() * optionsArr.length)];

  board[num].index.innerHTML = oImage;
  optionsArr.splice(returnIndex(optionsArr, num), 1);
}

//* The gameplay function
function game() {
  for (let i = 0; i < board.length; i++) {
    board[i].index.addEventListener("click", () => {

      usersTurn(board[i], i);

      computersTurn();
      
    });
  }
}

game();
