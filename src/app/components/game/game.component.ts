/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';
import { GameService } from '../../services/game.service';

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
    public gameService: GameService,
    private translate: TranslateService,
    private broadcaster: Broadcaster,
  ) {}

  public ngOnInit() {
    this.gameState = {
      elements: []
    };

    this.gameService.initGame();
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

}
