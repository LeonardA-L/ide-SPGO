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
  public elements: any[] = [
    {
      img: '/assets/img/elements/apple.png',
      x: 100,
      y: 100
    },
    {
      img: '/assets/img/elements/apple.png',
      x: 200,
      y: 200
    }
  ];

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
    private _sanitizer: DomSanitizer,
  ) {
    for (let e of this.elements) {
      e.left = _sanitizer.bypassSecurityTrustStyle(e.x / 900 * 100 + '%');
      e.top = _sanitizer.bypassSecurityTrustStyle(e.y / 600 * 100 + '%');
    }
  }

}
