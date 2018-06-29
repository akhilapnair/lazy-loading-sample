import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondchildComponent } from './secondchild/secondchild.component';
const appRoutes = [
  {
    path: 'second-child',
    component: SecondchildComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
