import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksStatisticComponent} from './tasks-statistic.component';
import {ChartModule} from 'angular-highcharts';

@NgModule({
	declarations: [TasksStatisticComponent],
	imports: [CommonModule, ChartModule],
	exports: [TasksStatisticComponent],
})
export class TasksStatisticModule {}
