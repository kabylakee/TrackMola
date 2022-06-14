import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinanceComponent} from './finance.component';
import {FinanceRoutingModule} from './finance-routing.module';

@NgModule({
	declarations: [FinanceComponent],
	imports: [CommonModule, FinanceRoutingModule],
})
export class FinanceModule {}
