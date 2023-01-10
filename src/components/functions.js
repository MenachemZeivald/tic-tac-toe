
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

    if (checkEachOptionToWin(arr, sign)) {
        return ( sign === 'X' ? 'win' : 'lose');
    }

    if (countSign(arr, ' ') === 0) {
        return 'tie';
    }
    return false;
}

export let AIturn = (arr, level) => {

    if (level === 'Easy') {
        return randomNum(arr);
        // return ((Math.floor(Math.random() * 2) > 1) ? randomNum(arr) : chanceToWin(arr));

    } else if (level === 'Medium') {
        return chanceToWin(arr) || randomNum(arr);

    } else if (level === 'Hard') {
        console.log('stil in progress...');

    }
}

let chanceToWin = arr => {
    return checkEachOption(arr, 'O') || checkEachOption(arr, 'X');
}

function checkEachOption(arr, sign) {
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
    return winList.some((i) => {
        return (i.every((j) => { return arr[j] === sign; }));
    });
}

export let countSign = (arr, sign) => {
    return arr.filter(arr => arr === sign).length;
}