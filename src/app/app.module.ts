import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeftPanelModule } from './shared/components/left-panel/left-panel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LeftPanelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
