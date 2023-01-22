import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DefaultStyle from "../DefaultStyle";

import Square from "./Square";
import { AIturn, checkIfWin, countSign } from "./functions";
import Victory from "./Victory";


export default function Board({ setWinner, level, setLevel, winner, stat, setStat, lang }) {

  const [arr, setArr] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [choosenPlace, setChoosenPlace] = useState();
  const [lastTurn, setLastTurn] = useState(true);
  const [winArr, setWinArr] = useState([]);

  // when the user click on square
  useEffect(() => {
    if (typeof choosenPlace === "number") {
      let tempArr = [...arr];
      tempArr[choosenPlace] = "X";
      setArr(tempArr);
    }
  }, [choosenPlace]);

  useEffect(() => {
    checkIfWinAndMakeAIMove();
  }, [arr]);

  // when the game ends update the stat 
  useEffect(() => {
    let tempStat = [...stat];
    winner && setLastTurn(() => {return !lastTurn});
    tempStat[(winner === 'win' ? 0 : winner === 'tie' ? 1 : winner === 'lose' && 2)]++;
    setStat(tempStat);
  }, [winner])

  if (winner) {
    if (level === 'Hard' && winner === 'win') {
      alert('הצלחת לנצח בשלב הקשה? אשמח לשמוע על זה!');
    }
    return <Victory res={winner} restart={reset} lang={lang} />;
  }

  return (
    <>
      <BoardStyle>
        {arr.map((place, i) => {
          return (
            <Square
              key={i}
              place={i}
              arr={arr}
              setTurn={setChoosenPlace}
              findInWinArr={winArr.includes(i)}
            ></Square>
          );
        })}
      </BoardStyle>
      <ResetBtn lang={lang} onClick={() => {reset(false);}}>{lang === "en" ? "reset" : "לאפס"}</ResetBtn>
    </>
  );

  function checkIfWinAndMakeAIMove() {
    if ((lastTurn && countSign(arr, "X") > countSign(arr, "O")) ||
        (!lastTurn && countSign(arr, "X") === countSign(arr, "O"))) {
      
      let gameRes = checkIfWin(arr, 'X');
      if (gameRes) {
        gameRes === 'tie' || setWinArr(gameRes);
        setTimeout(() => {
          setWinner((gameRes === 'tie' ? gameRes : 'win'));
        }, 1500);
      
      } else {
        setTimeout(() => {
          let tempArr = [...arr];
          tempArr[AIturn(tempArr, level) - 1] = "O";

          gameRes = checkIfWin(tempArr, 'O')
          if (gameRes) {
            gameRes === 'tie' || setWinArr(gameRes);
            setTimeout(() => {
              setWinner((gameRes === 'tie' ? gameRes : 'lose'));
            }, 1500);
          }
          setArr(tempArr);
        }, 150);
      }
    }
  }

  function reset(flag) {
    if (lastTurn) {
      setArr([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    } else {
      let tempArr = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      tempArr[[0, 2, 4, 4, 6, 8][Math.floor(Math.random() * 6)]] = 'O';
      setArr([...tempArr])
    }
    setChoosenPlace(false);
    setWinner(false);
    setWinArr([]);
    flag && setLevel(false);
  }

}


const BoardStyle = styled.div`
    max-width: 75vh;
    width: 80vmin;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 0 auto;
    margin-top: 20px;
    border: 3px solid var(--pink);
    background-color: var(--yellow);
    @media (max-device-width:  768px) {
      width: 97vw;
      margin-top: 10vh;
      margin-bottom: 5vh;
    }
`
const ResetBtn = styled(DefaultStyle)`
    font-size: large;
    width: fit-content;
    padding: .2em .4em;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 3vmin;
    border-radius: 8px;
    @media (max-device-width:  768px) {
      font-size:xx-large;
    }
`
