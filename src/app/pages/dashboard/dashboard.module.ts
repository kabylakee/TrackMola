import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NoDataModule} from 'src/app/shared/components/no-data/no-data.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ProjectTeamsModule} from 'src/app/shared/components/project-teams/project-teams.module';
import {TasksStatisticModule} from 'src/app/shared/components/tasks-statistic/tasks-statistic.module';
import {SemiCircleDonutModule} from 'src/app/shared/components/half-pie-chart/semi-circle-donut.module';
import {ProgressTasksModule} from 'src/app/shared/components/progress-tasks/progress-tasks.module';
import {NotificationModule} from 'src/app/shared/components/notification/notification.module';
import {VacationRequestModule} from '../../shared/components/vacation-request/vacation-request.module';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		HeaderModule,
		DashboardRoutingModule,
		NoDataModule,
		SemiCircleDonutModule,
		ProjectTeamsModule,
		TasksStatisticModule,
		ProgressTasksModule,
		VacationRequestModule,
		NotificationModule,
	],
})
export class DashboardModule {}
