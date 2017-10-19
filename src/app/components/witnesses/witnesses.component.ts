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
import { CONFIG } from '../../environment';

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
  public hoverName: string;
  public showWitnesses = false;

  constructor(
    public appState: AppState,
    public gameService: GameService,
    private broadcaster: Broadcaster,
  ) {
    const compo = this;
    this.broadcaster.on<any>('testimony').subscribe((event) => compo.testimony(event));
    this.broadcaster.on<any>('init').subscribe((event) => compo.init());
  }

  public init() {
    this.currentSequence = 'se rendre sur la propriété';
  }

  public goSequence(_seq, _idx, _link?) {
    let seq = _seq;
    if (_link) {
      _link.read = true;
    }

    if (seq === 'restart') {
      this.broadcaster.broadcast('restart');
      return;
    }
    this.currentSequence = seq;
    this.broadcaster.broadcast('testimony', seq);
  }

  public setHover(name) {
    this.hoverName = name;
  }

  public testimony(event) {
    const seq = this.gameService.gameData[event];
    if (seq.name === 'Oxygène') {
      const compo = this;
      setTimeout(() => {
        compo.showWitnesses = true;
      }, CONFIG.witDisplayDelay);
    }
  }

}
