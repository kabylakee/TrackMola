import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {ToggleButtonComponent} from './toggle-button/toggle-button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
	declarations: [ReportsComponent, ToggleButtonComponent],
	imports: [CommonModule, ReportsRoutingModule, MatButtonToggleModule],
})
export class ReportsModule {}
