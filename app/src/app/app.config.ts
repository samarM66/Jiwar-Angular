import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { router } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    router
  ]
};
