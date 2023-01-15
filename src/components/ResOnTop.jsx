import React from 'react';
import styled from 'styled-components';
import DefaultStyle from '../DefaultStyle';

export default function ResOnTop({ stat, lang }) {
  return (
    <Res lang={lang} >
      <div><span>{ lang === 'en' ? 'win' : 'ניצחונות'}:</span> <i>{ lang === 'en' ? 'W' : 'נ'}:</i> {stat[0]}</div>
      <div><span>{ lang === 'en' ? 'tie' : 'תיקו'}:</span> <i>{ lang === 'en' ? 'T' : 'ת'}:</i> {stat[1]}</div>
      <div><span>{ lang === 'en' ? 'lose' : 'הפסדים'}:</span> <i>{ lang === 'en' ? 'L' : 'ה'}:</i> {stat[2]}</div>
    </Res>
  )
}


const Res = styled(DefaultStyle)`
  font-size: xx-Large;
  justify-content: space-evenly;
  width: ${({lang}) => lang === 'en' ? '400px' : '500px'};
  transition: width .3s;
  cursor: default;

  @media (width < 550px) {
    width: fit-content;
    font-size: 5vw;
    & > div {
      padding: .1em 2vw;
    } 
  }

  &:lang(he) {
    flex-direction: row-reverse;
  }

  & i {
    display: none;
  }


  /* @media (width < 550px) {
    width: max(30vw, 200px);
    justify-content: space-around;
    & span {
      display: none;
    }
    & i {
      display: initial;
    }
  } */

`