/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  Input,
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
  @Input()
  public startSequence: string;

  public currentSequence: string;

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    public gameService: GameService,
  ) {}

  public ngOnInit() {
    this.currentSequence = this.startSequence || null;
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
