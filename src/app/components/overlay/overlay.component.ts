/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';
import { GameService } from '../../services/game.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'overlay',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'overlay.html',
  styleUrls: ['overlay.scss'],
})
export class OverlayComponent {

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    private gameService: GameService,
  ) {}

  public changeLang(lang) {
    this.gameService.initGame(lang);
  }

}
