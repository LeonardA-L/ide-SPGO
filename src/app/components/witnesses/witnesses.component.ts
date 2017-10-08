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

  constructor(
    public appState: AppState,
    private broadcaster: Broadcaster,
  ) {}

}
