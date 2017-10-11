/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';

import { Element } from '../../model/element.model';

import { TranslateService } from '@ngx-translate/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'game',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'game.html',
  styleUrls: ['game.scss'],
})
export class GameComponent implements OnInit {
  public gameState: any;
  private maxElem = 4;
  private gameData: any;

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    public translate: TranslateService,
    private http: Http,
  ) {}

  public ngOnInit() {
    this.gameState = {
      elements: []
    };

    const service = this;
    const fileName = '/assets/spgo_navigation_' + this.translate.getDefaultLang() + '.json';
    this.http.get(fileName).map((res) => res.json()).subscribe((success1) => service.processGameJSON(success1));
  }

  public pick(element: Element) {
    if (this.gameState.elements.length < this.maxElem) {
      this.gameState.elements.push(element);
      element.selected = true;
    }
  }

  public unpick(element: Element) {
    element.selected = false;
    for (let e in this.gameState.elements) {
      if (this.gameState.elements[e].id === element.id) {
        this.gameState.elements.splice(e, 1);
        break;
      }
    }
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

    console.log(this.gameData);
  }

}
