import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminCalendarItemComponent} from './admin-calendar-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [AdminCalendarItemComponent],
	imports: [CommonModule, MatIconModule],
	exports: [AdminCalendarItemComponent],
})
export class AdminCalendarItemModule {}
