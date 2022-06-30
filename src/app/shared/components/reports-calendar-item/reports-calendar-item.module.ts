import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsCalendarItemComponent} from './reports-calendar-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ReportsCalendarItemComponent],
	imports: [CommonModule, MatIconModule],
	exports: [ReportsCalendarItemComponent],
})
export class ReportsCalendarItemModule {}
