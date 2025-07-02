import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

