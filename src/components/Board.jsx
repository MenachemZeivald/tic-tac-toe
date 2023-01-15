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

  useEffect(() => {
    if (typeof choosenPlace === "number") {
      let tempArr = [...arr];
      tempArr[choosenPlace] = "X";
      setArr(tempArr);
    }
  }, [choosenPlace]);

  useEffect(() => {
    checkIfWinAndAIMakeMove();
  }, [arr]);

  useEffect(() => {
    let tempStat = [...stat];
    tempStat[(winner === 'win' ? 0 : winner === 'tie' ? 1 : winner === 'lose' && 2)]++;
    setStat(tempStat);
  }, [winner])

  if (winner) {
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
            ></Square>
          );
        })}
      </BoardStyle>
      <ResetBtn lang={lang} onClick={() => {reset(false);}}>{lang === "en" ? "reset" : "לאפס"}</ResetBtn>
    </>
  );

  function checkIfWinAndAIMakeMove() {
    if (countSign(arr, "X") > countSign(arr, "O")) {
      const gameRes = checkIfWin(arr, "X");
      setWinner(gameRes);

      if (!gameRes) {
        setTimeout(() => {
          let tempArr = [...arr];
          tempArr[AIturn(tempArr, level) - 1] = "O";

          if (checkIfWin(tempArr, "O")) {
            setTimeout(() => {
              setWinner("lose");
            }, 250);
          }
          setArr(tempArr);
        }, 150);
      }
    }
  }

  function reset(flag) {
    setArr([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    setChoosenPlace(false);
    setWinner(false);
    flag && setLevel(false);
  }

}


const BoardStyle = styled.div`
    width: max(620px, 45%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 0 auto;
    margin-top: 20px;
    border: 3px solid var(--pink);
    background-color: var(--yellow);
    @media (width < 768px) {
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
    margin-top: 15px;
    border-radius: 8px;
    @media (width < 768px) {
      font-size:xx-large;
    }
`
