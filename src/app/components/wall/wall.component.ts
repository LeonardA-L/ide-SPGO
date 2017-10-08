/*
 * Angular 2 decorators and services
 */
import {
  Component,
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
    new Element('/assets/img/elements/apple.png', 100, 100),
    new Element('/assets/img/elements/apple.png', 200, 200),
  ];

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

}
