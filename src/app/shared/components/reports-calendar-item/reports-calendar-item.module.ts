import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsCalendarItemComponent} from './reports-calendar-item.component';
import {MatIconModule} from '@angular/material/icon';
import {AppPipesModule} from '../../pipes/app-pipes.module';

@NgModule({
	declarations: [ReportsCalendarItemComponent],
	imports: [CommonModule, MatIconModule, AppPipesModule],
	exports: [ReportsCalendarItemComponent],
})
export class ReportsCalendarItemModule {}
