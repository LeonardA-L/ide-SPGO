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
  public elements: Element[] = [
    new Element(0, CONFIG.root + '/assets/img/elements/1_poster_chiromancie.png', 81.8, 92.2, 62.8),
    new Element(1, CONFIG.root + '/assets/img/elements/2_peinture_foret.png', 3, 42.2, 57.5),
    new Element(2, CONFIG.root + '/assets/img/elements/3_chaines.png', 23.2, 40.1, 75.2, true),
    new Element(3, CONFIG.root + '/assets/img/elements/4_fil_rouge.png', 9.3, 93.2, 11.7, false, true),
    new Element(4, CONFIG.root + '/assets/img/elements/5_freud.png', 11.3, 31.4, 32.5),
    new Element(5, CONFIG.root + '/assets/img/elements/6_amandier.png', 29.4, 79.78, -13.5, true),
    new Element(6, CONFIG.root + '/assets/img/elements/7_coffre.png', 16.1, 21.2, 40.3),
    new Element(7, CONFIG.root + '/assets/img/elements/8_centaure.png', 39.8, 70.0, 53.8),
    new Element(8, CONFIG.root + '/assets/img/elements/9_la_disparue.png', 32.6, 44, 46.8),
    new Element(9, CONFIG.root + '/assets/img/elements/10_photo_houdini.png', 19.1, 50, 8.8),
    new Element(10, CONFIG.root + '/assets/img/elements/11_trophee_de_chasse.png', 24.8, 43.6, 42.8),
    new Element(11, CONFIG.root + '/assets/img/elements/12_charentaises.png', 83.7, 97.7, 76.2, true),
    new Element(12, CONFIG.root + '/assets/img/elements/13_roue_astrologique.png', 39.7, 52, 32.5),
    new Element(13, CONFIG.root + '/assets/img/elements/14_assiette_coquelicot.png', 1.6, 21.8, 0.7),
    new Element(14, CONFIG.root + '/assets/img/elements/15_harakiri.png', 69.6, 87.2, 29.4),
    new Element(15, CONFIG.root + '/assets/img/elements/16_peinture_puits.png', 78.6, 97.8, 4.3),
    new Element(16, CONFIG.root + '/assets/img/elements/17_escarpins.png', 85.6, 95.4, 29.5, true),
    new Element(17, CONFIG.root + '/assets/img/elements/18_croquis_manoir.png', 57, 76, 4.6),
    new Element(18, CONFIG.root + '/assets/img/elements/19_peinture_lac.png', 57, 84.6, 40.5)
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
  }

  public reset() {
    for (let e of this.elements) {
      e.selected = false;
    }
  }

  public pickElement(elem: Element) {
    if (elem.selected) {
      this.unpick.next(elem);
    } else {
      this.pick.next(elem);
      this.broadcaster.broadcast('elementSelect', elem);
    }
  }

}
