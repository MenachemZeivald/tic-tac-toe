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
        ( (e.target.innerText !== 'Hard'&&e.target.innerText !== 'קשה') ? setLevel(lang==='en' ? e.target.innerText :lang_en[lang_he.indexOf(e.target.innerText)] ) : alert('still in progress...'))
      }}
    >            
      {(lang==='en' && level)||lang_he[lang_en.indexOf(level)]}
    </Level>
  );
}


const LevelsContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: ${({lang}) => lang === 'he' && 'row-reverse'};
  width: 85vw;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  @media (width < 768px) {
    flex-direction: column;
    height: 90vh;
    justify-content: space-evenly;
  }
` 

const Level = styled(DefaultStyle)`
  width: 250px;
  aspect-ratio: 1;
  border-width: 5px;
  border-radius: 50%;
  font-size: 350%;
 ` 
