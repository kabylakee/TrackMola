import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationComponent} from './vacation.component';
import {VacationRoutingModule} from './vacation-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {VacationTeamCalendarModule} from 'src/app/shared/components/vacation-team-calendar/vacation-team-calendar.module';
import {VacationHeaderModule} from 'src/app/shared/components/vacation-header/vacation-header.module';
import {ReportsTableModule} from 'src/app/shared/components/reports-table/reports-table.module';
import {VacationRequestHeaderModule} from 'src/app/shared/components/vacation-request-header/vacation-request-header.module';

@NgModule({
	declarations: [VacationComponent],
	imports: [
		CommonModule,
		HeaderModule,
		VacationRoutingModule,
		VacationTeamCalendarModule,
		VacationHeaderModule,
		VacationRequestHeaderModule,
		ReportsTableModule,
	],
	entryComponents: [],
})
export class VacationModule {}
