const xImage = '<img src="./images/x.png" alt=""></img>';
const oImage = '<img src="./images/o.png" alt="">';

let arr = [];
arr.length = 9;

arr[0] = document.querySelector('.zero');
arr[1] = document.querySelector('.one');
arr[2] = document.querySelector('.two');
arr[3] = document.querySelector('.three');
arr[4] = document.querySelector('.four');
arr[5] = document.querySelector('.five');
arr[6] = document.querySelector('.six');
arr[7] = document.querySelector('.seven');
arr[8] = document.querySelector('.eight');

//!function for the user to click on any button and get xImage

for(let i = 0; i < arr.length; i++) {

    arr[i].addEventListener('click', () => {
        if(arr[i].innerHTML != oImage) {
            arr[i].innerHTML = xImage;
        }
    })
}

