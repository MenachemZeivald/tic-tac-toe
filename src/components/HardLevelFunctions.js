import {
    checkEachOption,
    checkIfWin,
    countSign
} from "./functions";

export default function AImove(arr) {    
    return manualMove(arr) || buildGameTree(arr);
}

function manualMove(arr) {

    if (countSign(arr, 'X') === 1) {
        if (arr[4] === ' ') {
            return 4 + 1;
        }
        return ([0, 2, 6, 8][(Math.floor(Math.random() * 4))] + 1);       
    }

    if (arr[0] + arr[2] + arr[6] + arr[8] === 'XX') {
        return ([1, 3, 3, 7][(Math.floor(Math.random() * 4))] + 1);
    }
    return false;
}

function buildGameTree(arr) {

    let avialbleOptions = {};
    for (let place = 0; place < 9; place++) {

        let tempArr = [...arr];
        if (arr[place] === ' ') {
            tempArr[place] = 'O';
            avialbleOptions[place] = placeX(tempArr);
        }
    }

    let max = Math.max(...Object.values(avialbleOptions));
    let chooseRandom = Object.keys(avialbleOptions).filter((key) => {
        return avialbleOptions[key] === max;
    })
    let kkk = (chooseRandom[Math.floor(Math.random() * chooseRandom.length)]  * 1) + 1;
    return kkk;
}

function placeX(arr) {
    
    let res = checkIfWin(arr, 'O');
    if (res) {
        return (res === 'lose' ? 1 : res === 'win' ? -1 : 0);
    }

    let tempArr;
    let goodOption = checkEachOption(arr, 'X') || checkEachOption(arr, 'O');
    if (goodOption) {

        tempArr = [...arr];
        tempArr[goodOption - 1] = 'X';
        return placeO(tempArr);
    }

    let avialbleOptions = {}
    for (let place = 0; place < 9; place++) {

        tempArr = [...arr];
        if (arr[place] === ' ') {
            tempArr[place] = 'X';
            avialbleOptions[place] = placeO(tempArr);
        }
    }
    return Object.values(avialbleOptions).reduce((a, b) => a + b, 0);
}

function placeO(arr) {
        
    let res = checkIfWin(arr, 'X');
    if (res) {
        return (res === 'lose' ? 1 : res === 'win' ? -1 : 0);
    }

    let tempArr;
    let goodOption = checkEachOption(arr, 'O') || checkEachOption(arr, 'X');
    if (goodOption) {
        tempArr = [...arr];
        tempArr[goodOption - 1] = 'O';
        return placeX(tempArr);
    }

    let avialbleOptions = {}
    for (let place = 0; place < 9; place++) {

        tempArr = [...arr];
        if (arr[place] === ' ') {
            tempArr[place] = 'O';
            avialbleOptions[place] = placeX(tempArr);
        }
    }
    return Object.values(avialbleOptions).reduce((a, b) => a + b, 0);
}