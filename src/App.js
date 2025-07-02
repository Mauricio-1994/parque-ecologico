import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import './styles/App.css';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

