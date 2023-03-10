import React from 'react';
import styled from 'styled-components';
import DefaultStyle from "../DefaultStyle";


export default function ChooseLevel({ setLevel, lang }) {

  return (
    <LevelsContainer lang={lang}>
      <LevelOption level={'Easy'} lang={lang} setLevel={setLevel} />
      <LevelOption level={'Medium'} lang={lang} setLevel={setLevel} />
      <LevelOption level={'Hard'} lang={lang} setLevel={setLevel} />
    </LevelsContainer>
  );
}

function LevelOption({ level, setLevel, lang }) {
  let lang_en = ['Hard', 'Medium', 'Easy'];
  let lang_he = ['קשה', 'בינוני', 'קל'];
  return (
    <Level
      onClick={(e) => {
        (setLevel(lang==='en' ? e.target.innerText :lang_en[lang_he.indexOf(e.target.innerText)]))
      }}
    >            
      {(lang==='en' && level) || lang_he[lang_en.indexOf(level)]}
    </Level>
  );
}


const LevelsContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  height: 70vh;
  flex-direction: ${({lang}) => lang === 'he' && 'row-reverse'};
  width: 85vw;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  @media (max-device-width:  768px) {
    flex-direction: column;
    height: 80svh;
    gap: 10px;
    justify-content: space-evenly;
  }
` 

const Level = styled(DefaultStyle)`
  flex: 1 1 0px;
  max-width: 250px;
  min-width: 220px;
  aspect-ratio: 1;
  border-width: 5px;
  border-radius: 50%;
  font-size: 350%;
  @media (max-device-width:  768px) {
    width: min(30%, 300vw);
    min-width: fit-content;
    font-size: 10vw;
  }
 ` 
