import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { gmuReducer } from './store/gmu.reducer';
import { GmuEffects } from './store/gmu.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),

    // ✅ Registrazione dello store con chiave 'gmu'
    provideStore({ gmu: gmuReducer }),

    // ✅ Registrazione degli effetti
    provideEffects([GmuEffects]),

    // ✅ DevTools solo in modalità sviluppo
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};
