import React from 'react';
import Button from '../components/Button';
import { deepLinkService } from '../services/deepLinkService';
import { useDeepLink } from '../hooks/useDeepLink';

const Home: React.FC = () => {
  const { openApp } = useDeepLink();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Minha PWA</h1>
      {deepLinkService.map((app) => (
        <Button key={app.name} label={`Abrir ${app.name}`} onClick={() => openApp(app)} />
      ))}
    </div>
  );
};

export default Home;
