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
export class OverlayComponent implements OnInit {
  public currentSequence: string;

  public activate: bool = true;

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    public gameService: GameService,
  ) {
    const compo = this;
    this.broadcaster.on<any>('overlay').subscribe((event) => compo.startOverlay(event));
  }

  public startOverlay(event) {
    this.activate = true;
    this.currentSequence = event || null;
  }

  public changeLang(lang) {
    this.gameService.initGame(lang);
  }

  public startGame() {
    this.goSequence('le début');
  }

  public goSequence(seq) {
    this.currentSequence = seq;
  }

}
