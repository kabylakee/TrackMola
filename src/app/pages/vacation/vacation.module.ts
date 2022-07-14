import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationComponent} from './vacation.component';
import {VacationRoutingModule} from './vacation-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {VacationHeaderModule} from 'src/app/shared/components/vacation-header/vacation-header.module';

@NgModule({
	declarations: [VacationComponent],
	imports: [CommonModule, HeaderModule, VacationRoutingModule, VacationHeaderModule],
})
export class VacationModule {}
