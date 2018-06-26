import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstRoutingModule } from './first.routing';
import { FirstchildComponent } from './firstchild/firstchild.component';

@NgModule({
  declarations: [FirstchildComponent],
  imports: [FirstRoutingModule],
  providers: []
})
export class FirstModule {}
