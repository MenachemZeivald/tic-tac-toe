import './App.css';
import { useState } from 'react';
import ChooseLevel from './components/ChooseLevel';
import ResOnTop from './components/ResOnTop';
import Results from './components/Results';
import Board from './components/Board';
import Victory from './components/Victory';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  const [winner, setWinner] = useState('')
  const [level, setLevel] = useState();

  return (
    <BrowserRouter>
      <nav>
        <div>
          <a href='/'>Home</a>
        </div>
        <div>
          <Link to={'/results'}>
            <ResOnTop/>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route index element={ !level ?
          <><p>language</p><ChooseLevel setLevel={setLevel}/></> :
          winner ?
            <Victory res={winner} /> :
            <Board setWinner={setWinner} level={level} />}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
