import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationComponent} from './vacation.component';
import {VacationRoutingModule} from './vacation-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {VacationTeamCalendarModule} from 'src/app/shared/components/vacation-team-calendar/vacation-team-calendar.module';

@NgModule({
	declarations: [VacationComponent],
	imports: [CommonModule, HeaderModule, VacationRoutingModule, VacationTeamCalendarModule],
})
export class VacationModule {}
