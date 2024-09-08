import React, { useEffect } from 'react';
import Home from './pages/Home';
import './styles/GlobalStyles.css';

const App: React.FC = () => {
  useEffect(() => {
    let deferredPrompt: any;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const installButton = document.getElementById('installButton');
      if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', () => {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('Usuário aceitou a instalação da PWA');
            } else {
              console.log('Usuário rejeitou a instalação da PWA');
            }
            deferredPrompt = null;
          });
        });
      }
    });
  }, []);

  return (
    <div>
      <h1>PWA Vendas</h1>
      <button id="installButton" style={{ display: 'none' }}>
        Instalar
      </button>
      <Home />
    </div>
  );
};

export default App;
