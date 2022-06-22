import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {TableFilterModule} from 'src/app/shared/components/table-filter/table-filter.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [ReportsComponent],
	imports: [CommonModule, ReportsRoutingModule, TableFilterModule, MatButtonModule, MatIconModule],
})
export class ReportsModule {}
