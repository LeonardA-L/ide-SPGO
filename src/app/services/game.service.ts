// Crapette game service

import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';

import { AppState } from './../app.service';

@Injectable()
export class GameService {
  public gameData: any;

  constructor(
    public appState: AppState,
    public translate: TranslateService,
    private http: Http,
  ) {}

  public initGame(lang?) {
    this.translate.setDefaultLang(lang || this.translate.getDefaultLang());
    const service = this;
    const fileName = '/assets/spgo_navigation_' + this.translate.getDefaultLang() + '.json';
    this.http.get(fileName).map((res) => res.json()).subscribe((success) => service.processGameJSON(success));
  }

  private processGameJSON(jsonData) {
    this.gameData = {};

    // Delete useless properties
    jsonData.forEach((elem) => {
      delete elem.pid;
      delete elem.position;
      delete elem.tags;

      elem.childrenNames = elem.childrenNames.map((c) => c.replace(/\[\[.+->(.+)\]\]/i, '$1'));
      this.gameData[elem.name] = elem;
    });

    console.log('Loaded Navigation JSON');
    console.log(this.gameData);
  }
}
