import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksStatisticComponent} from './tasks-statistic.component';
import {ChartModule} from 'angular-highcharts';
import {HoursCardModule} from '../hours-card/hours-card.module';

@NgModule({
	declarations: [TasksStatisticComponent],
	imports: [CommonModule, ChartModule, HoursCardModule],
	exports: [TasksStatisticComponent],
})
export class TasksStatisticModule {}
