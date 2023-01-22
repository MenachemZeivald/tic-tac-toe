import React from 'react';
import styled from 'styled-components';
import DefaultStyle from "../DefaultStyle";


export default function Square({ place, arr, setTurn, findInWinArr }) {

  return (
    <>
      {arr[place] === ' ' ?
      <SquareStyle onClick={() => {setTurn(place)}} translate='no' ></SquareStyle> :
      <SquareStyle translate='no' findInWinArr={findInWinArr} >{arr[place]}</SquareStyle> }
    </>
  )
}


const SquareStyle = styled(DefaultStyle)`
    border: 3px solid var(--pink);
    aspect-ratio: 1;
    width: auto;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20vmin;
    color: ${({findInWinArr}) => {return findInWinArr && 'white'}};
    -webkit-text-stroke: ${({findInWinArr}) => {return findInWinArr && 'var(--Dblue) 5px'}};
    transition: all .7s;
`