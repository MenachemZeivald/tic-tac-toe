import {
    checkEachOption,
    checkIfWin,
    countSign
} from "./functions";

export default function AImove(arr) {    
    return manualMoves(arr) || buildGameTree(arr);
}

function manualMoves(arr) {

    if (countSign(arr, 'O') === 0) {
        if (arr[4] === ' ') {
            return 4 + 1;
        }
        return ([0, 2, 6, 8][(Math.floor(Math.random() * 4))] + 1);       
    }

    return false;
}

/**
 * It checks all the possible moves and assigns a score to each move. Then it chooses the best move.
 * @param arr - The current state of the board.
 * @returns a number between 1 and 9.
 */
function buildGameTree(arr) {

    /* Checking all the possible moves and assigning a score to each move. */
    let avialbleOptions = {};
    for (let place = 0; place < 9; place++) {

        let tempArr = [...arr];
        if (arr[place] === ' ') {
            tempArr[place] = 'O';
            avialbleOptions[place] = checkBranch(tempArr, 'X', 0);
        }
    }

    /* Choosing the best move. */
    let max = Math.max(...Object.values(avialbleOptions));
    let chooseRandom = Object.keys(avialbleOptions).filter((key) => {
        return avialbleOptions[key] === max;
    })
    return (chooseRandom[Math.floor(Math.random() * chooseRandom.length)]  * 1) + 1;
}

function checkBranch(arr, sign, depth) {
    
    let res = checkIfWin(arr, (sign === 'X' ? 'O' : 'X'));
    if (res) {
        if (res === 'tie') {
            return 0;
        }
        if (sign === 'X' && depth === 2) {
            return 10;
        }
        return (sign === 'O' ? -1 : 1);
    }

    /* Checking if there is a winning move for the AI or the player. If there is, it returns the score
    of that move. */
    let goodOption, tempArr;
    if (sign === 'X') {
	    goodOption = checkEachOption(arr, 'X') || checkEachOption(arr, 'O');
    } else {
        goodOption = checkEachOption(arr, 'O') || checkEachOption(arr, 'X');
    }
    if (goodOption) {

        tempArr = [...arr];
        tempArr[goodOption - 1] = sign;
        return checkBranch(tempArr, (sign === 'X' ? 'O' : 'X'), depth + 1);
    }

    /* Checking all the possible moves and assigning a score to each move. */
    let avialbleOptions = {}
    for (let place = 0; place < 9; place++) {

        tempArr = [...arr];
        if (arr[place] === ' ') {
            tempArr[place] = sign;
            avialbleOptions[place] = checkBranch(tempArr, (sign === 'X' ? 'O' : 'X'), depth + 1);
        }
    }
    /* Returning the sum of all the scores in the object. */
    return Object.values(avialbleOptions).reduce((a, b) => a + b, 0);
}
