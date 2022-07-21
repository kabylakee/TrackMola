import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationRequestComponent} from './vacation-request.component';
import {MatCardModule} from '@angular/material/card';
import {AppPipesModule} from '../../pipes/app-pipes.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [VacationRequestComponent],
	imports: [CommonModule, MatCardModule, AppPipesModule, MatIconModule],
	exports: [VacationRequestComponent],
})
export class VacationRequestModule {}
