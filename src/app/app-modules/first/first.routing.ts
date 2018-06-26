import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstchildComponent } from './firstchild/firstchild.component';

const appRoutes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  {
    path: 'first-child',
    component: FirstchildComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
