import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';

import '../styles/styles.scss';

import { GameComponent } from './components/game/game.component';
import { WallComponent } from './components/wall/wall.component';
import { WitnessesComponent } from './components/witnesses/witnesses.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HudComponent } from './components/hud/hud.component';

import { routing, appRoutingProviders } from './app.routes';

import { MarkdownModule } from 'angular2-markdown';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Broadcaster } from './services/broadcast.service';
import { GameService } from './services/game.service';
import { AudioService } from './services/audio.service';

import { CONFIG } from './environment';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, CONFIG.baseUrlStripped + '/assets/i18n/', '.json');
}

// Application wide providers
const APP_PROVIDERS = [
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    GameComponent,
    WitnessesComponent,
    WallComponent,
    OverlayComponent,
    HudComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MarkdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    routing,
    BrowserAnimationsModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    appRoutingProviders,
    Broadcaster,
    GameService,
    AudioService,
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

}
