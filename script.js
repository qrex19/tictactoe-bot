const xImage = '<img src="./images/x.png" alt=""></img>';
const oImage = '<img src="./images/o.png" alt="">';

const index = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const buttonObject = (number) => {

    const index = document.querySelector(`.${number}`);

    return {index};
    
}

let board = [];
board.length = 9;

for(let i = 0; i < board.length; i++) {
    board[i] = buttonObject(index[i]);
}

//!function for the user to click on any button and get xImage

for(let i = 0; i < board.length; i++) {

    board[i].index.addEventListener('click', () => {
        if(board[i].index.innerHTML != oImage) {
            board[i].index.innerHTML = xImage;
        }
    })
}

