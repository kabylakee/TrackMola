import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';

@NgModule({
	declarations: [ReportsComponent],
	imports: [CommonModule, ReportsRoutingModule, ToggleButtonModule],
})
export class ReportsModule {}
