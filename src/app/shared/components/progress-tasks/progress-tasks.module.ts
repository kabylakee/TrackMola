import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressTasksComponent} from './progress-tasks.component';
import {ProjectModule} from '../project/projects.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
	declarations: [ProgressTasksComponent],
	imports: [CommonModule, ProjectModule, MatTooltipModule],
	exports: [ProgressTasksComponent],
})
export class ProgressTasksModule {}
