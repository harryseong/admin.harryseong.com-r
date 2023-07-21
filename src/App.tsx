import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Places } from './pages/places/Places';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/places" element={<Places />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
