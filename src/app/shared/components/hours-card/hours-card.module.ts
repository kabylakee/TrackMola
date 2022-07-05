import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoursCardComponent} from './hours-card.component';
import {MatCardModule} from '@angular/material/card';
import {AppPipesModule} from '../../pipes/app-pipes.module';

@NgModule({
	declarations: [HoursCardComponent],
	imports: [CommonModule, MatCardModule, AppPipesModule],
	exports: [HoursCardComponent],
})
export class HoursCardModule {}
