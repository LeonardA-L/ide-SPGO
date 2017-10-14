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
  selector: 'witnesses',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'witnesses.html',
  styleUrls: ['witnesses.scss'],
})
export class WitnessesComponent {
  public currentSequence: string;

  constructor(
    public appState: AppState,
    public gameService: GameService,
    private broadcaster: Broadcaster,
  ) {
    const compo = this;
    this.broadcaster.on<any>('init').subscribe((event) => compo.init());
  }

  public init() {
    this.currentSequence = 'se rendre sur la propriété';
  }

  public goSequence(_seq) {
    let seq = _seq;
    if (seq === 'restart') {
      this.broadcaster.broadcast('restart');
      return;
    }
    this.currentSequence = seq;
  }

}
