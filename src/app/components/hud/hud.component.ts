/*
 * Angular 2 decorators and services
 */
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
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
  selector: 'hud',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'hud.html',
  styleUrls: ['hud.scss'],
})
export class HudComponent implements OnInit {
  public displayOxygen = false;

  @Output()
  private unpick = new EventEmitter();

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    public gameService: GameService,
  ) {
    const compo = this;
    this.broadcaster.on<any>('init').subscribe((event) => compo.init());
    this.broadcaster.on<any>('testimony').subscribe((event) => compo.testimony(event));
  }

  public ngOnInit() {
    this.init();
  }

  public init() {
    console.log('Hud');
    this.displayOxygen = false;
  }

  public testimony(event) {
    const seq = this.gameService.gameData[event];
    if (seq.name === 'Bouteilles') {
      const compo = this;
      setTimeout(() => {
        compo.displayOxygen = true;
      }, CONFIG.tankDisplayDelay);
    }
  }

  public unpickElem(elem: Element) {
    if (elem.selected) {
      this.unpick.next(elem);
    }
  }

}
