import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorker/serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  onSuccess: () => console.log('Service Worker registered successfully.'),
  onUpdate: (registration) => console.log('New content is available; please refresh.'),
});
