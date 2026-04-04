import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducers } from './state/app.reducer';
import { TransactionLogEffects } from './features/transactionLog/transactionLog.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), //  Add this to http client services
    provideAnimationsAsync(), // Required for Material components
    provideStore(appReducers), // Register the app reducers
    provideEffects([TransactionLogEffects]) // Register the effects
    ]
}; 
