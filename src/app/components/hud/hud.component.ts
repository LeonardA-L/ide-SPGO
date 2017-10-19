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
import { Element } from '../../model/element.model';

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
  public failure = false;

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
    this.broadcaster.on<any>('failure').subscribe((event) => compo.glowFail());
  }

  public ngOnInit() {
    this.init();
  }

  public init() {
    this.displayOxygen = false;
  }

  public testimony(event) {
    const seq = this.gameService.gameData[event];
    if (seq.name === 'Oxygène'  || seq.name === 'Bouteilles') {
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

  public glowFail() {
    setTimeout(() => {
      this.failure = true;
      setTimeout(() => {
        this.failure = false;
      }, 1000);
    }, 300);

    function delay(t) {
      return new Promise((resolve) => {
        setTimeout(resolve, t);
      });
    }

    delay(300)
    .then(() => {
      this.failure = true;
      return delay(1000);
    })
    .then(() => {
      this.failure = false;
      return delay(800);
    })
    .then(() => {
      this.failure = true;
      return delay(1000);
    })
    .then(() => {
      this.failure = false;
    });
  }

}
