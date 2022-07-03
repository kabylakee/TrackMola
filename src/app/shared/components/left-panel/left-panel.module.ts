import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftPanelComponent} from './left-panel.component';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [LeftPanelComponent],
	imports: [CommonModule, AppRoutingModule, MatIconModule, MatButtonModule],
	exports: [LeftPanelComponent],
})
export class LeftPanelModule {}
