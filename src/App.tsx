import './App.css';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material';
import { WeekContainer } from './components/WeekContainer';
import Header from './components/Header';
import { States } from './types/States';
import Theme from './styles/Theme';

function App() {
  const [currentState, setCurrentState] = useState(States[34]);

  function handleSearch(event: SelectChangeEvent) {
    setCurrentState(States.find(s => s.Name === event.target.value as string) || States[34]);
  }

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Header handleSelect={handleSearch} state={currentState} />
        <div style={{ height: '5em' }} />
        <WeekContainer state={currentState} />
      </div>
    </ThemeProvider>
  );
}

export default App;
