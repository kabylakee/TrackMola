import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinanceComponent} from './finance.component';
import {FinanceRoutingModule} from './finance-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ReportsTableModule} from 'src/app/shared/components/reports-table/reports-table.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [FinanceComponent],
	imports: [
		CommonModule,
		HeaderModule,
		FinanceRoutingModule,
		ReportsTableModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class FinanceModule {}
