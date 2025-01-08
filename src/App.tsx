import './App.css';
import { useState, useRef } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { WeekContainer } from './components/WeekContainer';
import Header from './components/Header';
import { States } from './types/States';

function App() {
  const [currentState, setCurrentState] = useState(States[34]);

  function handleSearch(event: SelectChangeEvent) {
    setCurrentState(States.find(s => s.Name === event.target.value as string) || States[34]);
  }

  console.log('currentState', currentState);

  return (
    <div className="App">
      <Header handleSelect={handleSearch} state={currentState} />
      <div style={{ height: '5em' }} />
      <WeekContainer state={currentState} />
    </div>
  );
}

export default App;
