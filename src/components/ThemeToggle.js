import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
    </div>
  );
}

export default ThemeToggle;

