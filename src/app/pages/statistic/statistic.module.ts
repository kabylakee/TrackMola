import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticComponent} from './statistic.component';
import {StatisticRoutingModule} from './statistic-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';

@NgModule({
	declarations: [StatisticComponent],
	imports: [CommonModule, HeaderModule, StatisticRoutingModule],
})
export class StatisticModule {}
