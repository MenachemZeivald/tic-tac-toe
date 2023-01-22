import AImove from "./HardLevelFunctions";

var winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export let checkIfWin = (arr, sign) => {

    let resArr = checkEachOptionToWin(arr, sign);
    if (resArr) {
        return resArr;//[resArr, (sign === 'X' ? 'win' : 'lose')];
    }

    if (countSign(arr, ' ') === 0) {
        return 'tie';
    }
    return false;
}

export let AIturn = (arr, level) => {

    if (level === 'Easy') {
        return randomNum(arr);

    } else if (level === 'Medium') {
        return chanceToWin(arr) || randomNum(arr);

    } else if (level === 'Hard') {
        return chanceToWin(arr) || AImove(arr);
    }
}

let chanceToWin = arr => {
    return checkEachOption(arr, 'O') || checkEachOption(arr, 'X');
}

export function checkEachOption(arr, sign) {
    let res = false;
    winList.forEach((row) => {
        let temp = row.filter(index => arr[index] === sign);
        if (!res && temp.length === 2) {
            res = checkIfEmptyPlace(arr, row);
        }
    });
    return res;
}

function checkIfEmptyPlace(arr, options) {
    let res;
    options.forEach((i) => {
        if (arr[i] === ' ') {
            res = i;
        }
    });
    return Number.isInteger(res) ? res + 1 : false;
}

function randomNum(arr) {
    let randomPlace = Math.floor(Math.random() * 9);
    while (arr[randomPlace] !== ' ') {
        randomPlace = Math.floor(Math.random() * 9);
    }
    return randomPlace + 1;
}

function checkEachOptionToWin(arr, sign) {
    // Iterating through winList
    const winCombination = winList.find(winCombination => {
        // Iterating through each winCombination
        return winCombination.every(index => { 
            //checking if the element at index is equal to the sign provided
            return arr[index] === sign;
        });
    });
    return winCombination || false;
}



export let countSign = (arr, sign) => {
    return arr.filter(arr => arr === sign).length;
}