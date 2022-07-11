import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinanceComponent} from './finance.component';
import {FinanceRoutingModule} from './finance-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';

@NgModule({
	declarations: [FinanceComponent],
	imports: [CommonModule, HeaderModule, FinanceRoutingModule],
})
export class FinanceModule {}
