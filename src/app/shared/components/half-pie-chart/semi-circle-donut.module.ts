import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SemiCircleDonutComponent} from './semi-circle-donut.component';
import {ChartModule} from 'angular-highcharts';
@NgModule({
	declarations: [SemiCircleDonutComponent],
	imports: [CommonModule, ChartModule],
	exports: [SemiCircleDonutComponent],
})
export class SemiCircleDonutModule {}
