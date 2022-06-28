import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {TableFilterModule} from 'src/app/shared/components/table-filter/table-filter.module';
import {MonthTableModule} from 'src/app/shared/components/month-table/month-table.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [CommonModule, ReportsRoutingModule, TableFilterModule, MonthTableModule],
})
export class ReportsModule {}
