import React from 'react'

/**
 * It's a function that takes in a prop called res and returns a div that says you won, you lost, or
 * tie, and a button that reloads the page.
 * @returns A function that returns a component.
 */
export default function Victory({ res }) {
  return (
    <>
        <div>{res === 'win' ? 'you won!' : res === 'lose' ? 'you lose!' : 'tie!'}</div>
        <button onClick={() => {window.location.reload()}}>i want to play again!</button>
    </>
  )
}
