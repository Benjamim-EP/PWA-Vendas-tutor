import { useCallback } from 'react';
import { IDeepLink } from '../interfaces/IDeepLink';

export const useDeepLink = () => {
  const openApp = useCallback((app: IDeepLink) => {
    try {
      window.location.href = app.url;
    } catch (error) {
      console.error(`Erro ao tentar abrir o aplicativo ${app.name}: `, error);
    }
  }, []);

  return { openApp };
};
