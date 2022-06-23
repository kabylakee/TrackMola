import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {OptionsButtonModule} from 'src/app/shared/components/options-button/options-button.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [CommonModule, ReportsRoutingModule, OptionsButtonModule],
})
export class ReportsModule {}
