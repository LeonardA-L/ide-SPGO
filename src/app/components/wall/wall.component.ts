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

import { Element } from '../../model/element.model';

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
    new Element(0, '/assets/img/elements/1_poster_chiromancie.png', 400, 100),
    new Element(1, '/assets/img/elements/2_peinture_foret.png', 100, 300),
  ];

  @Output()
  private pick = new EventEmitter();

  @Output()
  private unpick = new EventEmitter();

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    private _sanitizer: DomSanitizer,
  ) {
    for (let e of this.elements) {
      e.img = _sanitizer.bypassSecurityTrustResourceUrl(e.img);
      e.left = _sanitizer.bypassSecurityTrustStyle(e.x / 900 * 100 + '%');
      e.top = _sanitizer.bypassSecurityTrustStyle(e.y / 600 * 100 + '%');
    }
  }

  public pickElement(elem: Element) {
    if (elem.selected) {
      this.unpick.next(elem);
    } else {
      this.pick.next(elem);
    }
  }

}
