import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstchildComponent } from './firstchild/firstchild.component';

const appRoutes = [
  {
    path: 'first-child',
    component: FirstchildComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
