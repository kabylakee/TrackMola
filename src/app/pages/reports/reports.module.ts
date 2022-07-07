import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { TableFilterModule } from 'src/app/shared/components/table-filter/table-filter.module';
import { MonthTableModule } from 'src/app/shared/components/month-table/month-table.module';
import { ReportsTableModule } from 'src/app/shared/components/reports-table/reports-table.module';
import { CalendarLegendModule } from 'src/app/shared/components/calendar-legend/calendar-legend.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [
		CommonModule,
		ReportsRoutingModule,
		TableFilterModule,
		ReportsTableModule,
		MonthTableModule,
		CalendarLegendModule,
	],
})
export class ReportsModule { }
