import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. "{process.env.REACT_APP_TITLE} [{process.env.NODE_ENV}]"
        </p>
        <Button variant="text"
          href='https://reactjs.org'
          target='_blank'
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
