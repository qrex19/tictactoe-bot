// Math.floor(Math.random() * arr.length)

const xImage = '<img src="./images/x.png" alt="">';
const oImage = '<img src="./images/o.png" alt="">';

let boardStatus = true; //* default mode

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
    for(let a = 0; a < arr.length; a++) {
        if(arr[a] == target) {
            return a;
        }
    }
}

let optionsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//* The gameplay function
function game() {
  for (let i = 0; i < board.length; i++) {
    board[i].index.addEventListener("click", () => {

        //* logic

        if(board[i].index.innerHTML != oImage && board[i].index.innerHTML != xImage) {
            board[i].index.innerHTML = xImage
            optionsArr.splice(returnIndex(optionsArr, i), 1);
        }

        //* computer's turn
        let rand = Math.floor(Math.random() * optionsArr.length); //returns a random index from the array
        let num = optionsArr[rand];

        board[num].index.innerHTML = oImage;
        optionsArr.splice(returnIndex(optionsArr, num), 1);
        console.log(optionsArr);


    });
  }
}

game();
