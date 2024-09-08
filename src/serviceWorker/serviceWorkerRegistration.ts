// Este arquivo é o responsável por registrar o service worker.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.\d+){3}$/
      )
  );
  
  type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
  };
  
  export function register(config?: Config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(
        (process as { env: { [key: string]: string } }).env.PUBLIC_URL,
        window.location.href
      );
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Este app está sendo servido em cache-first por um service worker.'
            );
          });
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('Novo conteúdo disponível; por favor, recarregue.');
  
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                console.log('Conteúdo em cache para uso offline.');
  
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Erro durante o registro do service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl: string, config?: Config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'Nenhuma conexão à internet. App sendo executado no modo offline.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  