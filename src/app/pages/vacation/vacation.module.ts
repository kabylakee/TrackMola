import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationComponent} from './vacation.component';
import {VacationRoutingModule} from './vacation-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {MatDialogModule} from '@angular/material/dialog';
import {VacationRequestComponent} from 'src/app/shared/components/vacation-request/vacation-request.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [VacationComponent, VacationRequestComponent],
	imports: [
		CommonModule,
		HeaderModule,
		VacationRoutingModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		FormsModule,
		ReactiveFormsModule,
	],
	entryComponents: [VacationRequestComponent],
})
export class VacationModule {}
