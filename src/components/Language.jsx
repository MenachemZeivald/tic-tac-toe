import React from 'react';
import styled from 'styled-components';
import DefaultStyle from "../DefaultStyle";


export default function Language({ language ,setLanguage }) {
  return (
    <>
    <LngBtn lang={language} onClick={() => { language === 'en' ? setLanguage('he') : setLanguage('en') }} ><span lang='he'> עברית </span>English</LngBtn>
    <LngIcon className="material-symbols-outlined" onClick={() => { language === 'en' ? setLanguage('he') : setLanguage('en') }} >language</LngIcon>
    </>
  )
}

const LngBtn = styled(DefaultStyle)`
    font-size: x-large;
    width: fit-content;
    padding: .2em;
    padding-bottom: .3em;
    position: relative;
    float: right;
    @media (width < 768px) {
      display: none;
    }
    & > span {
      padding: .1em;
      margin-right: .6em;
      font-size: 105%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 7px;
      left: ${({lang}) => lang === 'he' ? '4px' : '90px'};
      width: ${({lang}) => lang === 'he' ? '70px' : '80px'};
      transition: all .3s;
      height: 3px;
      background-color: var(--Dblue);
    }
`
const LngIcon = styled(DefaultStyle)`
  aspect-ratio: 1;
  @media (width > 768px) {
      display: none;
    }
`