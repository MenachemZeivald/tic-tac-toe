import { useState, useEffect } from "react";

import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import DefaultStyle from "./DefaultStyle";

import ChooseLevel from "./components/ChooseLevel";
import ResOnTop from "./components/ResOnTop";
import Board from "./components/Board";
import Language from "./components/Language";

function App() {
  
  const [winner, setWinner] = useState("");
  const [level, setLevel] = useState();
  const [stat, setStat] = useState([0, 0, 0]);
  const [language, setLanguage] = useState(
    (window.navigator.userLanguage || window.navigator.language).slice(0, 2)
  );

  useEffect(() => {
    setStatFunc(winner);
  }, [winner]);

  return (
    <>
      <GlobalStyle />
      <Nav>
        <HomeIcon
          translate="no"
          className="material-symbols-outlined"
          onClick={() => {
            setWinner(false);
            setLevel(false);
          }}
        >
          home
        </HomeIcon>
        <div>
          <ResOnTop stat={stat} lang={language} />
        </div>
        <div>
          {!level && (
            <Language setLanguage={setLanguage} language={language}></Language>
          )}
        </div>
      </Nav>

      {!level ? (
        <ChooseLevel setLevel={setLevel} lang={language} />
      ) : (
        <Board
          winner={winner}
          setWinner={setWinner}
          level={level}
          setLevel={setLevel}
          stat={stat}
          setStat={setStat}
          lang={language}
        />
      )}
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
  display: grid;
  grid-template-columns: 175px auto 175px;
  grid-column-gap: 10px;
  margin: 10px;

  & > * {
    display: flex;
  }
  & > div:nth-child(2) {
    justify-content: center;
  }
  & > div:last-child {
    justify-content: end;
  }
  @media (max-device-width: 800px) {
    grid-template-columns: 55px auto 55px;
  }
`;
const HomeIcon = styled(DefaultStyle)`
  width: 50px;
  aspect-ratio: 1;
  font-size: 200%;
`;
