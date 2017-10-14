// Crapette game service

import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';

import { AppState } from './../app.service';
import { CONFIG } from './../environment';
import { Broadcaster } from './broadcast.service';

@Injectable()
export class GameService {
  public gameData: any;
  public json;

  constructor(
    public appState: AppState,
    public translate: TranslateService,
    private http: Http,
    private broadcaster: Broadcaster,
  ) {
    const service = this;
    this.broadcaster.on<any>('restart').subscribe((event) => service.startGame(null));
  }

  public initGame(lang?) {
    this.translate.setDefaultLang(lang || this.translate.getDefaultLang());
    const service = this;
    const fileName = CONFIG.root + '/assets/spgo_navigation_' + this.translate.getDefaultLang() + '.json';
    this.http.get(fileName).map((res) => res.json()).subscribe((success) => service.startGame(success));
  }

  public startGame(json) {
    if(json) {
      this.json = json;
      this.processGameJSON(this.json);
    }
    this.broadcaster.broadcast('overlay', null);
  }

  private processGameJSON(jsonData) {
    this.gameData = {};

    // Delete useless properties
    jsonData.forEach((elem) => {
      delete elem.pid;
      delete elem.position;
      delete elem.tags;

      elem.childrenNames = elem.childrenNames.map((c) => {
        let link = {
          link: c.replace(/\[\[(.+)->(.+)\]\]/i, '$1'),
          goal: c.replace(/\[\[(.+)->(.+)\]\]/i, '$2')
        };

        if (link.goal === 'se rendre sur la propriété') {
          link.goal = 'start';
          link.translate = true;
        }

        return link;
      });

      if (elem.name === 'la police vous embarque') {
        elem.childrenNames = [{
          link: 'start',
          goal: 'start',
          translate: true
        }];
      }

      if (elem.name === 'ne pas lire la lettre') {
        elem.childrenNames = [{
          link: 'restart',
          goal: 'restart'
          translate: true;
        }];
      }

      this.gameData[elem.name] = elem;
    });

    console.log('Loaded Navigation JSON');
    console.log(this.gameData);
  }
}
