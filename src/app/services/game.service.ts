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
  public gameState: any;
  public witnesses = [{
      name: 'Régine',
      picture: CONFIG.root + '/assets/img/faces/REGINE.jpeg'
    },
    {
      name: 'Howard',
      picture: CONFIG.root + '/assets/img/faces/HOWARD.jpeg'
    },
    {
      name: 'Gérard',
      picture: CONFIG.root + '/assets/img/faces/GERARD.jpeg'
    },
    {
      name: 'Pauline',
      picture: CONFIG.root + '/assets/img/faces/PAULINE.jpeg'
    }];
  public json;

  constructor(
    public appState: AppState,
    public translate: TranslateService,
    private http: Http,
    private broadcaster: Broadcaster,
  ) {
    const service = this;
    this.broadcaster.on<any>('restart').subscribe((event) => service.startGame(null));
    this.broadcaster.on<any>('testimony').subscribe((event) => service.testimony(event));
    this.broadcaster.on<any>('elementSelect').subscribe((event) => service.elementSelect(event));
  }

  public initGame(lang?) {
    this.translate.setDefaultLang(lang || this.translate.getDefaultLang());
    const service = this;
    const fileName = CONFIG.root + '/assets/spgo_navigation_' + this.translate.getDefaultLang() + '.json';
    this.http.get(fileName).map((res) => res.json()).subscribe((success) => service.startGame(success));
  }

  public startGame(json) {
    if (json) {
      this.json = JSON.stringify(json);
    }
    this.processGameJSON(JSON.parse(this.json));
    this.gameState = {
      elements: [],
      oxygen: CONFIG.oxygen.start,
      victory: false,
    };
    this.broadcaster.broadcast('overlay', null);
    this.broadcaster.broadcast('init', null);
  }

  public testimony(json) {
    this.gameState.oxygen -= CONFIG.oxygen.witnessDecay;
    this.gameState.oxygen = Math.max(0, this.gameState.oxygen);
  }

  public elementSelect(json) {
    this.gameState.oxygen -= CONFIG.oxygen.elementDecay;
    this.gameState.oxygen = Math.max(0, this.gameState.oxygen);
  }

  public victoryCheck() {
    let countRight = 0;
    this.gameState.elements.forEach((e) => {
      countRight += +(e.selected && e.good);
    });

    if (CONFIG.maxElem === countRight) {
      this.gameState.victory = true;
      this.broadcaster.broadcast('victory', this.gameState.oxygen > 0);
      this.victory();
    }
  }

  private processGameJSON(jsonData) {
    this.gameData = {};

    // Delete useless properties
    jsonData.forEach((elem) => {
      delete elem.pid;
      delete elem.position;
      delete elem.tags;

      elem.content = elem.content.replace(/\[\[.+\]\]\s?/gmi, '');
      elem.content = elem.content.replace(/\\n\\n/gmi, '\n\n');

      elem.childrenNames = elem.childrenNames.map((c) => {
        let link = {
          link: c.replace(/\[\[(.+)->(.+)\]\]/i, '$1'),
          goal: c.replace(/\[\[(.+)->(.+)\]\]/i, '$2'),
          translate: false
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

      if (elem.name === 'Untitled Passage' || elem.name === 'Perdu') {
        elem.name = 'Lose';
      }
      if (elem.name === 'Untitled Passage 1' || elem.name === 'Gagné') {
        elem.name = 'Win';
      }

      if (elem.name === 'ne pas lire la lettre' || elem.name === 'Lose' || elem.name === 'Win') {
        elem.childrenNames = [{
          link: 'restart',
          goal: 'restart',
          translate: true
        }];
      }

      this.gameData[elem.name] = elem;
    });

    this.witnesses.forEach((w) => {
      const elem = this.gameData[w.name];

      elem.childrenNames.map((k) => k.goal).forEach((c) => {
        let childElem = this.gameData[c];
        childElem.childrenNames = [
          {
            link: w.name + '.backto',
            goal: w.name,
            translate: true
          }
        ];
      });
    });

    console.log('Loaded Navigation JSON');
    console.log(this.gameData);
  }

  private victory() {
    function delay(t) {
      return new Promise((resolve) => {
        setTimeout(resolve, t);
      });
    }

    delay(1000)
    .then(() => {
      this.broadcaster.broadcast('showThread');
      return delay(1000);
    })
    .then(() => {
      this.broadcaster.broadcast('showThread');
      return delay(3000);
    })
    .then(() => {
      this.broadcaster.broadcast('overlay', this.gameState.oxygen > 0 ? 'Win' : 'Lose');
    });
  }
}
