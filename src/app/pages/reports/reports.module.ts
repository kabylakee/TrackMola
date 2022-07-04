import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {TableFilterModule} from 'src/app/shared/components/table-filter/table-filter.module';
import {ReportFilterModule} from 'src/app/shared/components/report-filter/report-filter.module';
import {ReportsTableModule} from 'src/app/shared/components/reports-table/reports-table.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [
		CommonModule,
		ReportsRoutingModule,
		TableFilterModule,
		ReportFilterModule,
		ReportsTableModule,
	],
})
export class ReportsModule {}
