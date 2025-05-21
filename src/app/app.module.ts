import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { gmuReducer } from './store/gmu.reducer';
import { GmuEffects } from './store/gmu.effects';

@NgModule({
  declarations: [

    // altri componenti
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // ✅ NgRx Store e Effects
    StoreModule.forRoot({ gmu: gmuReducer }),
    EffectsModule.forRoot([GmuEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
})
export class AppModule {}
