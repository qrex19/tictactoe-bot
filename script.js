const xImage = '<img src="./images/x.png" alt="">';
const oImage = '<img src="./images/o.png" alt="">';

let boardStatus = true; //* default mode

const buttonObject = (number) => {

    const index = document.querySelector(`.${number}`);

    return {index};
    
}

let board = [];
board.length = 9;

const index = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

for(let i = 0; i < board.length; i++) {
    board[i] = buttonObject(index[i]);
}

//* to generate a random number between 0 and 8 (both inclusive)
function randomNumber() {
    return Math.floor(Math.random() * (9));
}

function computersturn() {

    //! use a better algorithm!

    

}

//* The gameplay function
function gameTurn() {

    for(let i = 0;i < board.length; i++) {

        board[i].index.addEventListener('click', () => {
            //! game logic here

            //put an xImage, if no sign is in the particular button
            if(board[i].index.innerHTML != oImage) {
                board[i].index.innerHTML = xImage;
            }

            computersturn();

    
        })
    
    }

}



gameTurn();