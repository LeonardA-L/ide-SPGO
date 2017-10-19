/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';
import { GameService } from '../../services/game.service';
import { CONFIG } from '../../environment';

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

  public activate = true;
  public letter = 'Lire la lettre';
  public letterAsset = CONFIG.root + '/assets/img/LetterBourdy_' + this.translate.getDefaultLang() + '.png';

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    public translate: TranslateService,
    public gameService: GameService,
  ) {
    const compo = this;
    this.broadcaster.on<any>('overlay').subscribe((event) => compo.startOverlay(event));
  }

  public ngOnInit() {
    this.startOverlay(null);
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

  public goSequence(_seq) {
    let seq = _seq;
    if (seq === 'start') {
      this.activate = false;
      this.broadcaster.broadcast('noOverlay');
      return;
    }
    if (seq === 'restart') {
      this.broadcaster.broadcast('restart');
      return;
    }
    this.currentSequence = seq;
  }

}
