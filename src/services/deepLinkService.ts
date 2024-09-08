import { IDeepLink } from '../interfaces/IDeepLink';

// Serviço responsável por definir os links de deep link
export const deepLinkService: IDeepLink[] = [
  { name: 'Facebook', url: 'fb://' },
  { name: 'OLX', url: 'olxapp://' },
];
