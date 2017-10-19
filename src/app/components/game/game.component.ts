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
import { AudioService } from '../../services/audio.service';

import { Element } from '../../model/element.model';

import { TranslateService } from '@ngx-translate/core';

import { CONFIG } from '../../environment';

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
  public teddy = false;
  private maxElem = CONFIG.maxElem;

  constructor(
    public appState: AppState,
    public gameService: GameService,
    private translate: TranslateService,
    private broadcaster: Broadcaster,
    private route: ActivatedRoute,
    private audio: AudioService,
  ) {}

  public ngOnInit() {
    this.gameService.gameState = {};
    this.teddy = this.route.snapshot.queryParams.teddy; // Debug hack
    if (!this.teddy) {
      this.gameService.initGame();
    }
    this.audio.init();
  }

  public pick(element: Element) {
    if (this.gameService.gameState.victory) {
      return;
    }
    if (this.gameService.gameState.elements.length < this.maxElem) {
      this.gameService.gameState.elements.push(element);
      element.selected = true;
      this.broadcaster.broadcast('elementSelect', element);

      if (this.gameService.gameState.elements.length === this.maxElem) {
        this.gameService.victoryCheck();
      }
    }
  }

  public unpick(element: Element) {
    if (this.gameService.gameState.victory) {
      return;
    }
    element.selected = false;
    for (let e in this.gameService.gameState.elements) {
      if (this.gameService.gameState.elements[e].id === element.id) {
        this.gameService.gameState.elements.splice(e, 1);
        break;
      }
    }
  }

  public startFromTeddy() {
    this.teddy = false;
    this.gameService.startGame(null);
  }

}
