import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticComponent} from './statistic.component';
import {StatisticRoutingModule} from './statistic-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ExportExcelModule} from 'src/app/shared/components/export-excel/export-excel.module';

@NgModule({
	declarations: [StatisticComponent],
	imports: [CommonModule, HeaderModule, StatisticRoutingModule, ExportExcelModule],
})
export class StatisticModule {}
