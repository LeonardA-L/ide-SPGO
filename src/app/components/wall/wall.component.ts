/*
 * Angular 2 decorators and services
 */
import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';
import { GameService } from '../../services/game.service';

import { Element } from '../../model/element.model';

import { CONFIG } from '../../environment';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'wall',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'wall.html',
  styleUrls: ['wall.scss'],
})
export class WallComponent {
  public enable = false;
  public failure = false;
  public elements: Element[] = [
    new Element(0, CONFIG.root + '/assets/img/elements/1_poster_chiromancie.png', 86.9, 93.7, 50),
    new Element(1, CONFIG.root + '/assets/img/elements/2_peinture_foret.png', 3, 42.2, 57.5, false, true),
    new Element(3, CONFIG.root + '/assets/img/elements/4_fil_rouge.png', 9.3, 93.2, 11.7, false, true),
    new Element(4, CONFIG.root + '/assets/img/elements/5_freud.png', 11.2, 31.6, 32.3),
    new Element(5, CONFIG.root + '/assets/img/elements/6_amandier.png', 29.4, 79.78, -13.5, false, true),
    new Element(8, CONFIG.root + '/assets/img/elements/9_la_disparue.png', 21.7, 33.1, 2.0),
    new Element(9, CONFIG.root + '/assets/img/elements/10_photo_houdini.png', 73.1, 86.3, 59.5),
    new Element(12, CONFIG.root + '/assets/img/elements/13_roue_astrologique.png', 35.6, 47.9, 44.3),
    new Element(2, CONFIG.root + '/assets/img/elements/3_chaines.png', 30.3, 48.7, 27.2, true),
    new Element(10, CONFIG.root + '/assets/img/elements/11_trophee_de_chasse.png', 29.6, 48.3, -2.2),
    new Element(13, CONFIG.root + '/assets/img/elements/14_assiette_coquelicot.png', 1.6, 21.8, 0.7),
    new Element(14, CONFIG.root + '/assets/img/elements/15_harakiri.png', 73.9, 85.7, 37),
    new Element(15, CONFIG.root + '/assets/img/elements/16_peinture_puits.png', 78.6, 97.8, 4.3),
    new Element(16, CONFIG.root + '/assets/img/elements/17_escarpins.png', 85.6, 95.4, 29.5),
    new Element(17, CONFIG.root + '/assets/img/elements/18_croquis_manoir.png', 57, 76, 4.6, false, true),
    new Element(7, CONFIG.root + '/assets/img/elements/8_centaure.png', 18.3, 42, 61.3),
    new Element(18, CONFIG.root + '/assets/img/elements/19_peinture_lac.png', 41, 68.8, 34.5, false, true),
    new Element(11, CONFIG.root + '/assets/img/elements/12_charentaises.png', 63.3, 77.3, 34.3, true),
    new Element(6, CONFIG.root + '/assets/img/elements/7_coffre.png', 41.2, 67.7, 76.2, true),

    new Element(19, CONFIG.root + '/assets/img/elements/triangle.png', 22.9, 91.6, 16, false, true, true),
    new Element(20, CONFIG.root + '/assets/img/elements/7_coffre.png', 41.2, 67.7, 76.2, false, true, true),
    new Element(21, CONFIG.root + '/assets/img/elements/12_charentaises.png', 63.3, 77.3, 34.3, false, true, true),
    new Element(22, CONFIG.root + '/assets/img/elements/3_chaines.png', 30.3, 48.7, 27.2, false, true, true),
  ];

  @Output()
  private pick = new EventEmitter();

  @Output()
  private unpick = new EventEmitter();

  constructor(
    public appState: AppState,
    public gameService: GameService,
    private broadcaster: Broadcaster,
    private _sanitizer: DomSanitizer,
  ) {
    for (let e of this.elements) {
      e.img = _sanitizer.bypassSecurityTrustResourceUrl(e.img);
      e.left = _sanitizer.bypassSecurityTrustStyle(e.x + '%');
      e.top = _sanitizer.bypassSecurityTrustStyle(e.y + '%');
    }
    const compo = this;
    this.broadcaster.on<any>('init').subscribe((event) => compo.reset());
    this.broadcaster.on<any>('showThread').subscribe((event) => compo.showThread());
    this.broadcaster.on<any>('testimony').subscribe((event) => compo.enablePick(event));
    this.broadcaster.on<any>('failure').subscribe((event) => compo.glowFail());
  }

  public reset() {
    for (let e of this.elements) {
      e.selected = false;
      e.hidden = e.hiddenOrig;
    }
  }

  public pickElement(elem: Element) {
    if (elem.selected) {
      this.unpick.next(elem);
    } else {
      this.pick.next(elem);
    }
  }

  public showThread() {
    for (let e of this.elements) {
      if (e.hidden) {
        e.hidden = false;
        break;
      }
    }
  }

  public enablePick(event) {
    const seq = this.gameService.gameData[event];
    if (seq.name === 'Oxygène' || seq.name === 'Bouteilles') {
      this.enable = true;
    }
  }

  public glowFail() {
    /* setTimeout(() => {
      this.failure = true;
      setTimeout(() => {
        this.failure = false;
      }, 1000);
    }, 300);*/
  }

}
