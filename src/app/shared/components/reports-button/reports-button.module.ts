import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsButtonComponent} from './reports-button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [ReportsButtonComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
	exports: [ReportsButtonComponent],
})
export class ReportsButtonModule {}
