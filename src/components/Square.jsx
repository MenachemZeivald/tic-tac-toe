import React from 'react'

export default function Square({ place, arr, setTurn }) {
  let style = {
    border: '1px solid black',
    aspectRatio: '1',
    textAlign: 'center',
    fontSize: '500%',
    userSelect: 'none',
  }

  return (
    <>
      {arr[place] === ' ' ?
      <div style={style} onClick={() => {setTurn(place)}}></div> :
      <div style={style}>{arr[place]}</div> }
    </>
  )
}
