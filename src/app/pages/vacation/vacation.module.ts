import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationComponent} from './vacation.component';
import {VacationRoutingModule} from './vacation-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {YearCalendarModule} from 'src/app/shared/components/year-calendar/year-calendar.module';

@NgModule({
	declarations: [VacationComponent],
	imports: [CommonModule, HeaderModule, VacationRoutingModule, YearCalendarModule],
})
export class VacationModule {}
