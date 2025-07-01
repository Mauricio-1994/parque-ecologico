import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '1rem', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Prefeitura de Goioerê | Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
