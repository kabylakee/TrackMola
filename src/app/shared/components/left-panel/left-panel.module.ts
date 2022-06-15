import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LeftPanelComponent
  ]
})
export class LeftPanelModule { }
