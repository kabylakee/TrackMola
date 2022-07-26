import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationToggleComponent} from './vacation-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [VacationToggleComponent],
	imports: [CommonModule, MatButtonToggleModule, MatIconModule],
	exports: [VacationToggleComponent],
})
export class VacationToggleModule {}
