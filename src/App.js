import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import DefaultStyle from "./DefaultStyle";

import { useState, useEffect } from "react";
import ChooseLevel from "./components/ChooseLevel";
import ResOnTop from "./components/ResOnTop";
import Board from "./components/Board";
import Language from "./components/Language";


function App() {

  const [winner, setWinner] = useState("");
  const [level, setLevel] = useState();
  const [stat, setStat] = useState([0, 0, 0]);
  const [language, setLanguage] = useState((window.navigator.userLanguage || window.navigator.language).slice(0, 2));
  
  useEffect(() => {
    setStatFunc(winner);
  }, [winner]);

  return (
    <>
    <GlobalStyle/>
      <Nav>
        <div>
        <HomeIcon>
          <div className='material-symbols-outlined' onClick={() => {setWinner(false); setLevel(false)}}>
            home
          </div>
        </HomeIcon>
        </div>
        <div>
        <TopRes>
            <ResOnTop stat={stat} lang={language} />
        </TopRes>
        </div>
        <div>
        {!level && <Language setLanguage={setLanguage} language={language} ></Language>}
        </div>
      </Nav>

      {!level ? (
        <ChooseLevel setLevel={setLevel} lang={language} />
      ) : (
        <Board winner={winner} setWinner={setWinner} level={level} setLevel={setLevel} stat={stat} setStat={setStat} lang={language} />
        )
      }
      </>
  );

  function setStatFunc(winner) {

    if (winner === "Win") {
      let tempStat = [...stat];
      tempStat[0]++;
      setStat(tempStat);

    } else if (winner === "Tie") {
      let tempStat = [...stat];
      tempStat[1]++;
      setStat(tempStat);

    } else if (winner === "Lose") {
      let tempStat = [...stat];
      tempStat[2]++;
      setStat(tempStat);
    }
  }
}

export default App;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  & > * {
    width: 33.3%;
    display: flex;
  }
  & > div:first-child {
    justify-content: start;
  }
  & > div:nth-child(2) {
    justify-content: center;
  }
  & > div:nth-child(3) {
    justify-content: end;
  }
  
`
const HomeIcon = styled(DefaultStyle)`
  width: 50px;
  .material-symbols-outlined {
    color: var(--Dblue);
    font-size: 200%;
  }
`
const TopRes = styled(DefaultStyle)`
  cursor: default;
`

