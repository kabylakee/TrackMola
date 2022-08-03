import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressTasksComponent} from './progress-tasks.component';
import {ProjectModule} from '../project/projects.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NoDataModule} from '../no-data/no-data.module';

@NgModule({
	declarations: [ProgressTasksComponent],
	imports: [CommonModule, ProjectModule, MatTooltipModule, NoDataModule],
	exports: [ProgressTasksComponent],
})
export class ProgressTasksModule {}
