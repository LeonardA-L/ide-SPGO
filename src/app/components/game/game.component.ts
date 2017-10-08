/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

import { Broadcaster } from '../../services/broadcast.service';

import { Element } from '../../model/element.model';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'game',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'game.html',
  styleUrls: ['game.scss'],
})
export class GameComponent implements OnInit {
  public gameState: any;
  private maxElem = 4;

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
  ) {}

  public ngOnInit() {
    this.gameState = {
      elements: []
    };
  }

  public pick(element: Element) {
    if (this.gameState.elements.length < this.maxElem) {
      this.gameState.elements.push(element);
      element.selected = true;
    }
  }

  public unpick(element: Element) {
    element.selected = false;
    for (let e in this.gameState.elements) {
      if (this.gameState.elements[e].id === element.id) {
        this.gameState.elements.splice(e, 1);
        break;
      }
    }
  }

}
