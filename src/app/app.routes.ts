import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
  { path: '', component: GameComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, { useHash: true });
