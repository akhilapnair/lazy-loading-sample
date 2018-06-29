import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SecondRoutingModule } from './second.routing';
import { SecondchildComponent } from './secondchild/secondchild.component';

@NgModule({
  declarations: [SecondchildComponent],
  imports: [SecondRoutingModule],
  providers: []
})
export class SecondModule {}
