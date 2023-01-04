import React from 'react'
import { useState, useEffect } from 'react';
import Square from "./Square";
import { AIturn, checkIfWin, countSign } from "./functions";

export default function Board({ setWinner, level }) {

    const [arr, setArr] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    const [choosenPlace, setChoosenPlace] = useState();
    // const [lastTurnByUser, setLastTurnByUser] = useState(false);

    let style = {
        width: '50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        margin: '0 auto',
        marginTop: '20px',
        border: '1px solid black',
    }

    let reset = () => {
        setArr([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
        setChoosenPlace();
    }

    useEffect(() => {
        console.log(level);
    }, [])

    useEffect(() => {
        if (typeof choosenPlace === "number") {
            
            let tempArr = [...arr];
            tempArr[choosenPlace] = 'O';
            setArr(tempArr);

            setTimeout(() => {
                setWinner(checkIfWin(tempArr, 'O'));
            }, 100);

            // setLastTurnByUser(true);
        }
    }, [choosenPlace])

    useEffect(() => {
        if (countSign(arr, 'O') > countSign(arr, 'X')) {

            setTimeout(() => {

                let tempArr = [...arr];
                tempArr[AIturn(tempArr, level)] = 'X';

                if (checkIfWin(tempArr, 'X')) {
                    setTimeout(() => {
                        setWinner('lose');
                    }, 250);
                }
                setArr(tempArr);
            }, 150);
        }
    }, [arr])

    return (
        <>
        <div style={style}>
            {
                arr.map((place, i) => {
                    return (<Square key={i} place={i} arr={arr} setTurn={setChoosenPlace} ></Square>)
                })
            }
        </div>
        <button style={{margin: '0 auto'}} onClick={reset}>reset</button>
        </>
    )
}
