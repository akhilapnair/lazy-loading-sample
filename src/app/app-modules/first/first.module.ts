import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstRoutingModule } from './first.routing';
import { FirstComponent } from './first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule, FirstRoutingModule],
  providers: []
})
export class AppModule {}
