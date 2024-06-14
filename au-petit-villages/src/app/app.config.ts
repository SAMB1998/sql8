import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes),
  // Ajoutez d'autres providers si nécessaire
];
