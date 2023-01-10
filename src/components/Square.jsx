import React from 'react';
import styled from 'styled-components';
import DefaultStyle from "../DefaultStyle";


export default function Square({ place, arr, setTurn }) {

  return (
    <>
      {arr[place] === ' ' ?
      <SquareStyle onClick={() => {setTurn(place)}}></SquareStyle> :
      <SquareStyle>{arr[place]}</SquareStyle> }
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
    font-size: min(900%, 20vw);
    user-select: none;
`