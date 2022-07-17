import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NoDataModule} from 'src/app/shared/components/no-data/no-data.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {TasksStatisticModule} from 'src/app/shared/components/tasks-statistic/tasks-statistic.module';

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, HeaderModule, DashboardRoutingModule, NoDataModule, TasksStatisticModule],
})
export class DashboardModule {}
