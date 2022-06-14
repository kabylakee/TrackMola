import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [CommonModule, ReportsRoutingModule],
})
export class ReportsModule {}
