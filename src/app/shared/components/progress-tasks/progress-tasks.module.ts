import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressTasksComponent} from './progress-tasks.component';

@NgModule({
	declarations: [ProgressTasksComponent],
	imports: [CommonModule],
	exports: [ProgressTasksComponent],
})
export class ProgressTasksModule {}
