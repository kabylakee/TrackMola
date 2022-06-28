import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoursCardComponent} from './hours-card.component';
import {MatCardModule} from '@angular/material/card';
import {CommaSeparatedPipe} from '../../pipes/comma-separated.pipe';

@NgModule({
	declarations: [HoursCardComponent, CommaSeparatedPipe],
	imports: [CommonModule, MatCardModule],
	exports: [HoursCardComponent],
})
export class HoursCardModule {}
